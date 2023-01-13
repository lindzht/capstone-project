import { useState } from "react";
import { Icon } from 'semantic-ui-react'
import FormSignup from "./FormSignup";

function FormCompany (){

    const [displaySignupForm, setDisplaySignupForm ] = useState(false)
    const [createCompany, setCreateCompany] = useState({
        name: ""
    });
    
    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
    
        setCreateCompany({
            ...createCompany,
            [key]: value
        })
    }
    const handleCompanySubmit = (e) => {
        e.preventDefault();
        setCreateCompany(createCompany);
        setDisplaySignupForm(!displaySignupForm); 
    };


if (displaySignupForm) return <FormSignup name={createCompany.name} /> 
    return(
        <div id="formcompany-container">
            <form onSubmit={handleCompanySubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Company Name"
                    value={createCompany.name}
                    onChange={handleChange} />
                <Icon name='right arrow' className="icon-right-arrow" onClick={handleCompanySubmit}/>
            </form>
        </div>
    )
}

export default FormCompany;

