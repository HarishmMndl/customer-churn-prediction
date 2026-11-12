import React from 'react'
import {User} from "lucide-react";

const DemographicsCard = ({formData, onChange}) => {
  return (
    <div className="card">
        <div className='card-header'>
            <User size={20} className='card-icon' />
            <h3>1. Demographics & Profile</h3>
        </div>

        <div className='form-grid'>
         <div className='form-group'>
            <label>Gender</label>
            <select
              name='gender'
              value={formData.gender}
              onChange={onChange}
              >
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>
         </div>

         <div className="form-group">
            <label>Senior Citizen</label>
            <select 
              name="Senior Citizen"
              value={formData.seniorCitizen}
              onChange={(e) => onchange({ target: {name : "SeniorCitizen", value:
                Number(e.target.value)
              }})}
              >
                <option value={0}>No</option>
                <option value={1}>Yes</option>
              </select>
         </div>

         <div className='form-group'>
           <label>Partner</label>
           <select
             name="Partner"
             value={formData.partner}
             onChange={onchange}
             >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
             </select>
         </div>

         <div className='form-group'>
            <label>Departments</label>
            <select
              name='Dependents'
              value={formData.Dependents}
              onchange={onChange}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
         </div>
        </div>
    </div>
  );
}

export default DemographicsCard