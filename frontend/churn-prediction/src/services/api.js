const API_URL = "http://localhost:5000/predict";

export async function predictCustomerChurn(formData) {
    try{
        const response = await fetch(API_URL,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if(!response.ok){
            const errorData = await response.json().catch(()=> ({}));
             throw new Error(errorData.error || `Server responded with status 
                ${response.status}`);   
        }   

        return await response.json();
    }
    catch(error) {
        console.error("API Call Failed:", error);
        throw error;
    }
}     
    
