import { useState } from "react";
import { Icon } from 'semantic-ui-react'
import FormSignup from "./FormSignup";

function FormCompany ({newCompany, setNewCompany, createNewRecruiter, newCompanyID, setDisplaySignupForm }){

    // const [displaySignupForm, setDisplaySignupForm ] = useState(false)
    
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
        // setDisplaySignupForm(!displaySignupForm); 
        setNewCompany(newCompany)
        setDisplaySignupForm(true)
        
        // setNewCompany({name: ""})
    };

// if (displaySignupForm) return <FormSignup createNewRecruiter={createNewRecruiter} newCompanyID={newCompanyID} newCompany={newCompany}/> 
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

