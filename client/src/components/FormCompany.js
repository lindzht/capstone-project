import { useState } from "react";
import { Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import FormSignup from "./FormSignup";

function FormCompany ({newCompany, setNewCompany, createNewCompany, createNewRecruiter, newCompanyID }){

    const [displaySignupForm, setDisplaySignupForm ] = useState(false)
    
    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
    
        setNewCompany({
            ...newCompany,
            [key]: value
        })
    }
    const handleCompanySubmit = (e) => {
        e.preventDefault();
        createNewCompany(newCompany)
        setDisplaySignupForm(!displaySignupForm); 
        setNewCompany({name: ""})
    };

if (displaySignupForm) return <FormSignup createNewRecruiter={createNewRecruiter} newCompanyID={newCompanyID}/> 
    return(
        <div id="formcompany-container">
            <form onSubmit={handleCompanySubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Company Name..."
                    value={newCompany.name}
                    onChange={handleChange} />
                <Icon name='right arrow' className="arrow circle right" size="big" onClick={handleCompanySubmit}/>
            </form>
        </div>
    )
}

export default FormCompany;

