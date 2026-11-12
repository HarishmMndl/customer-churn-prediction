import React from "react";
import { AlertTriangle, CheckCircle, TrendingUp } from "lucide-react";

export default function PredictionResult({ result, loading, error }) {
  if (loading) {
    return (
      <div className="result-card loading-card">
        <div className="spinner"></div>
        <h4>Analyzing customer profile with Neural Network...</h4>
      </div>
    );
  }

  if (error) {
    return (
      <div className="result-card error-card">
        <AlertTriangle size={28} className="text-danger" />
        <h4>Prediction Error</h4>
        <p>{error}</p>
        <small>Make sure your Python backend server is running on port 5000.</small>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="result-card empty-card">
        <TrendingUp size={36} className="text-muted" />
        <h4>No Prediction Yet</h4>
        <p>Fill out customer details and click <strong>"Predict Churn Risk"</strong> below.</p>
      </div>
    );
  }

  const isChurn = result.churn_prediction === 1;
  const probabilityPercent = (result.churn_probability * 100).toFixed(1);

  return (
    <div className={`result-card ${isChurn ? "result-danger" : "result-safe"}`}>
      <div className="result-badge-row">
        {isChurn ? (
          <span className="badge badge-danger">
            <AlertTriangle size={16} /> HIGH CHURN RISK
          </span>
        ) : (
          <span className="badge badge-success">
            <CheckCircle size={16} /> CUSTOMER LIKELY TO STAY
          </span>
        )}
      </div>

      <div className="probability-display">
        <h2>{probabilityPercent}%</h2>
        <span className="subtext">Churn Probability</span>
      </div>

      <div className="progress-container">
        <div 
          className={`progress-bar ${isChurn ? "progress-danger" : "progress-success"}`} 
          style={{ width: `${probabilityPercent}%` }}
        />
      </div>

      <div className="insight-box">
        <strong>Strategic Recommendation:</strong>
        <p>
          {isChurn 
            ? "⚠️ High probability of leaving. Consider offering a discounted 1-year contract or loyalty perks for fiber optic users."
            : "✅ Customer exhibits strong retention signals with healthy engagement. Regular check-ins recommended."}
        </p>
      </div>
    </div>
  );
}