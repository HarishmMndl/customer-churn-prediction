import React from "react";
import { Wifi, Phone, ShieldCheck } from "lucide-react";

export default function ServicesCard({ formData, onChange }) {
  return (
    <div className="card">
      <div className="card-header">
        <Wifi size={20} className="card-icon" />
        <h3>2. Subscribed Services</h3>
      </div>

      <div className="form-grid">
        <div className="form-group">
          <label><Phone size={14} /> Phone Service</label>
          <select name="PhoneService" value={formData.PhoneService} onChange={onChange}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="form-group">
          <label>Multiple Lines</label>
          <select name="MultipleLines" value={formData.MultipleLines} onChange={onChange}>
            <option value="No">No</option>
            <option value="Yes">Yes</option>
            <option value="No phone service">No phone service</option>
          </select>
        </div>

        <div className="form-group">
          <label>Internet Service</label>
          <select name="InternetService" value={formData.InternetService} onChange={onChange}>
            <option value="Fiber optic">Fiber optic</option>
            <option value="DSL">DSL</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="form-group">
          <label><ShieldCheck size={14} /> Online Security</label>
          <select name="OnlineSecurity" value={formData.OnlineSecurity} onChange={onChange}>
            <option value="No">No</option>
            <option value="Yes">Yes</option>
            <option value="No internet service">No internet service</option>
          </select>
        </div>

        <div className="form-group">
          <label>Online Backup</label>
          <select name="OnlineBackup" value={formData.OnlineBackup} onChange={onChange}>
            <option value="No">No</option>
            <option value="Yes">Yes</option>
            <option value="No internet service">No internet service</option>
          </select>
        </div>

        <div className="form-group">
          <label>Device Protection</label>
          <select name="DeviceProtection" value={formData.DeviceProtection} onChange={onChange}>
            <option value="No">No</option>
            <option value="Yes">Yes</option>
            <option value="No internet service">No internet service</option>
          </select>
        </div>

        <div className="form-group">
          <label>Tech Support</label>
          <select name="TechSupport" value={formData.TechSupport} onChange={onChange}>
            <option value="No">No</option>
            <option value="Yes">Yes</option>
            <option value="No internet service">No internet service</option>
          </select>
        </div>

        <div className="form-group">
          <label>Streaming TV</label>
          <select name="StreamingTV" value={formData.StreamingTV} onChange={onChange}>
            <option value="No">No</option>
            <option value="Yes">Yes</option>
            <option value="No internet service">No internet service</option>
          </select>
        </div>

        <div className="form-group">
          <label>Streaming Movies</label>
          <select name="StreamingMovies" value={formData.StreamingMovies} onChange={onChange}>
            <option value="No">No</option>
            <option value="Yes">Yes</option>
            <option value="No internet service">No internet service</option>
          </select>
        </div>
      </div>
    </div>
  );
}