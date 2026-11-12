import React from "react";
import { CreditCard, Calendar } from "lucide-react";

export default function BillingCard({ formData, onChange }) {
  return (
    <div className="card">
      <div className="card-header">
        <CreditCard size={20} className="card-icon" />
        <h3>3. Contract & Billing Details</h3>
      </div>

      <div className="form-grid">
        <div className="form-group full-width">
          <div className="slider-header">
            <label><Calendar size={14} /> Customer Tenure: <strong>{formData.tenure} months</strong></label>
          </div>
          <input 
            type="range" 
            name="tenure" 
            min="0" 
            max="72" 
            value={formData.tenure} 
            onChange={(e) => onChange({ target: { name: "tenure", value: Number(e.target.value) } })}
            className="slider"
          />
        </div>

        <div className="form-group">
          <label>Contract Type</label>
          <select name="Contract" value={formData.Contract} onChange={onChange}>
            <option value="Month-to-month">Month-to-month</option>
            <option value="One year">One year</option>
            <option value="Two year">Two year</option>
          </select>
        </div>

        <div className="form-group">
          <label>Paperless Billing</label>
          <select name="PaperlessBilling" value={formData.PaperlessBilling} onChange={onChange}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="form-group">
          <label>Payment Method</label>
          <select name="PaymentMethod" value={formData.PaymentMethod} onChange={onChange}>
            <option value="Electronic check">Electronic check</option>
            <option value="Mailed check">Mailed check</option>
            <option value="Bank transfer (automatic)">Bank transfer (automatic)</option>
            <option value="Credit card (automatic)">Credit card (automatic)</option>
          </select>
        </div>

        <div className="form-group">
          <label>Monthly Charges ($)</label>
          <input 
            type="number" 
            step="0.05"
            name="MonthlyCharges" 
            value={formData.MonthlyCharges} 
            onChange={(e) => onChange({ target: { name: "MonthlyCharges", value: parseFloat(e.target.value) || 0 } })}
          />
        </div>

        <div className="form-group">
          <label>Total Charges ($)</label>
          <input 
            type="number" 
            step="0.1"
            name="TotalCharges" 
            value={formData.TotalCharges} 
            onChange={(e) => onChange({ target: { name: "TotalCharges", value: parseFloat(e.target.value) || 0 } })}
          />
        </div>
      </div>
    </div>
  );
}