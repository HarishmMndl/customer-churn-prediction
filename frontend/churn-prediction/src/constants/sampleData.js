export const INITIAL_FORM_STATE = {
    gender: "Female",
    SeniorCitizen: 0,
    Partner: "No",
    Dependents:"no",
    tenure:1,
    PhonoServices:"No",
    MultipleLines:"No phone service",
    InternetServices:"DSL",
    OnlineSecurity:"No",
    OnlineBackup:"Yes",
    DeviceProtection:"No",
    TechSupport:"No",
    StreamingTV:"No",
    StreamingMovies:"No",
    Contract:"Month-to-month",
    PaperlessBilling:"yes",
    PaymentMethod:"Electronic check",
    MonthlyCharge:29.85,
    TotalCharges:29.85

};

export const SAMPLE_PROFILES = {
    highRisk: {
        gender:"Female",
        SeniorCitizen: 0,
        Partner:"No",
        Dependents: "No",
        tenure:2,
        PhoneServices:"Yes",
        MultipleLines:"No",
        InternetServices:"Fiber optic",
        OnlineSecurity:"No",
        OnlineBackup: "No",
        DeviceProtection: "No",
        TechSupport: "No",
        StreamingTV: "No",
        StreamingMovies: "No",
        Contract:"Month-to-month",
        PaperlessBilling: "Yes",
        PaymentMethod: "Electronic check",
        MonthlyCharge:70.70,
        TotalCharges:151.65
    },

    loyal: {
        gender: "Male",
        SeniorCitizen:0,
        Partner:"Yes",
        Dependents:"Yes",
        tenure: 65,
        PhoneServices: "Yes",
        MultipleLines: "Yes",
        InternetServices: "DSL",
        OnlineSecurity: "Yes",
        OnlineBackup:"Yes",
        DeviceProtection: "Yes",
        TechSupport: "Yes",
        StreamingTV: "Yes",
        StreamingMovies: "Yes",
        Contract: "Two year",
        PaperlessBilling: "No",
        PaymentMethod: "Bank transfer (automatic)",
        MonthlyCharge: 85.50,
        TotalCharges: 5500.00
    }
    
};