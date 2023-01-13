import { Button } from 'semantic-ui-react'
import { useState } from 'react';

function FormSignup ({newCompanyName, companySearchResult, createNewRecruiter, newCompany}){
    console.log(newCompanyName)
    const [newRecruiter, setNewRecruiter] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        // admin: newCompanyName ? true : false,
        // company_id: newCompanyName ? newCompany.id : companySearchResultID
    });
    
    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        
        if (newCompanyName) {
            setNewRecruiter({
                ...newRecruiter,
                [key]: value,
                admin: true,
                company_name: newCompany
            })  
        } else {
            setNewRecruiter({
                ...newRecruiter,
                [key]: value,
                admin: false,
                company_name: companySearchResult
            })
        }
    }

    const handleRecruiterSubmit = (e) => {
        e.preventDefault();
        createNewRecruiter(newRecruiter)
    };



// if (companySearchResult) return <FormCompany />
    return(
        <div id="formsignup-container">
            <h1>Join!</h1>
            <form onSubmit={handleRecruiterSubmit}>
                <input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    value={newRecruiter.first_name} 
                    onChange={handleChange}/>
                <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    value={newRecruiter.last_name} 
                    onChange={handleChange}/>
                <input
                    type="text"
                    name="email"
                    placeholder="Email Address"
                    value={newRecruiter.email} 
                    onChange={handleChange}/>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={newRecruiter.password} 
                    onChange={handleChange}/>
                <input
                    type="password"
                    name="password_confirmation"
                    placeholder="Password Confirmation"
                    value={newRecruiter.password_confirmation} 
                    onChange={handleChange}/>
                <input 
                    type="submit"
                    text="Submit" />
            </form>
        </div>
    )
}

export default FormSignup;

