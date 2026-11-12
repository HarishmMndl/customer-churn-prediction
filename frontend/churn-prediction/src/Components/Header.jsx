import React from "react";
import { Activity, Sparkles, RotateCcw } from "lucide-react";

export default function Header({onLoadSample, onReset}) {
    return (
        <header className="header-container">
            <div className="header-title-box">
                <div className="icon-badge">
                    <Activity size={26} className="text-primary" />
                </div>

                <div>
                    <h1>Customer Churn AI Predictor</h1>
                    <p>Powered by Artificial Neural Network (ANN) & Keras Deep Learning</p>
                </div>
            </div>

            <div className="header-actions">
             <button
               type="button"
               className="btn-secondary"
               onClick={()=> onLoadSample("highRisk")}  
             >
              <Sparkles size={16} /> Load High-Risk Sample
             </button>

             <button
               type="button"
               className="btn-secondary"
               onClick={()=> onLoadSample("loayl")}
              >
                <Sparkles size={16} /> Load Loayal Sample
            </button>

             <button
               type="button"
               className="btn-outline"
               onClick={onReset}
               title="Reset to default"
              >
                <RotateCcw size={16} /> Reset
            </button>
            </div>
        </header>
    );
}