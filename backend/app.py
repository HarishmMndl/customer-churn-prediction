import os
import joblib
import pandas as pd
import keras
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
# Enable CORS so your React frontend (on port 5173 or 5174) can communicate with Flask
CORS(app)

# Resolve paths to preprocessor and trained ANN model
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, "..", "ml_model", "customer_churn_ann.keras")
PREPROCESSOR_PATH = os.path.join(BASE_DIR, "..", "ml_model", "preprocessor.pkl")

print("🔄 Loading preprocessor and ANN model...")
preprocessor = joblib.load(PREPROCESSOR_PATH)
model = keras.models.load_model(MODEL_PATH)
print("✅ Preprocessor and Model loaded successfully!")

@app.route("/", methods=["GET"])
def health_check():
    return jsonify({
        "status": "online",
        "message": "Customer Churn Prediction API is running!"
    })

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()
        if not data:
            return jsonify({"error": "No input data provided"}), 400

        # Convert received JSON payload to Pandas DataFrame
        df = pd.DataFrame([data])

        # Ensure customerID is present for the preprocessor pipeline
        if "customerID" not in df.columns:
            df["customerID"] = "TEMP-CUSTOMER"

        # Ensure correct data types for numeric fields
        numeric_cols = ["SeniorCitizen", "tenure", "MonthlyCharges", "TotalCharges"]
        for col in numeric_cols:
            if col in df.columns:
                df[col] = pd.to_numeric(df[col], errors="coerce").fillna(0)

        # 1. Transform features using preprocessor.pkl
        X_processed = preprocessor.transform(df)

        # 2. Predict churn probability using ANN model
        prob = float(model.predict(X_processed)[0][0])
        prediction = 1 if prob > 0.5 else 0

        # Return response matching what React expects
        return jsonify({
            "status": "success",
            "churn_prediction": prediction,
            "churn_probability": round(prob, 4)
        })

    except Exception as e:
        print(f"❌ Error during prediction: {e}")
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    # Runs on port 5000
    app.run(host="0.0.0.0", port=5000, debug=True)