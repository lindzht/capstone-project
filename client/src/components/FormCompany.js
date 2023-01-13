import { useState } from "react";
import { Icon } from 'semantic-ui-react'
import FormSignup from "./FormSignup";

function FormCompany ({createNewCompany}){

    const [displaySignupForm, setDisplaySignupForm ] = useState(false)
    const [newCompany, setNewCompany] = useState({
        name: ""
    });
    
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
        setNewCompany({name: ""})
        setDisplaySignupForm(!displaySignupForm); 
    };


if (displaySignupForm) return <FormSignup newCompanyName={newCompany.name} /> 
    return(
        <div id="formcompany-container">
            <form onSubmit={handleCompanySubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Company Name"
                    value={newCompany.name}
                    onChange={handleChange} />
                <Icon name='right arrow' className="icon-right-arrow" onClick={handleCompanySubmit}/>
            </form>
        </div>
    )
}

export default FormCompany;

