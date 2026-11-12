import React, { useState } from "react";
import Header from "./Components/Header";
import DemographicsCard from "./components/DemographicsCard";
import ServicesCard from "./Components/ServiceCard";
import BillingCard from "./Components/BillingCard";
import PredictionResult from "./Components/PredictionResult";
import { INITIAL_FORM_STATE, SAMPLE_PROFILES } from "./constants/sampleData";
import { predictCustomerChurn } from "./services/api";
import "./App.css";

export default function App() {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLoadSample = (sampleType) => {
    setFormData(SAMPLE_PROFILES[sampleType]);
    setResult(null);
    setError(null);
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM_STATE);
    setResult(null);
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await predictCustomerChurn(formData);
      setResult(response);
    } catch (err) {
      setError(err.message || "Could not connect to prediction server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <Header onLoadSample={handleLoadSample} onReset={handleReset} />

      <main className="main-content">
        <form onSubmit={handleSubmit} className="form-column">
          <DemographicsCard formData={formData} onChange={handleInputChange} />
          <ServicesCard formData={formData} onChange={handleInputChange} />
          <BillingCard formData={formData} onChange={handleInputChange} />

          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? "Calculating..." : "Predict Churn Risk"}
          </button>
        </form>

        <aside className="result-column">
          <div className="sticky-wrapper">
            <PredictionResult result={result} loading={loading} error={error} />
          </div>
        </aside>
      </main>
    </div>
  );
}