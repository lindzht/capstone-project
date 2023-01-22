import { Button, Icon } from 'semantic-ui-react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function FormSignup ({newCompanyName, companySearchName, createNewRecruiter, newCompany, newCompanyCreated, newCompanyID, companySearchID}){
    

    const navigate = useNavigate();
    const [newRecruiter, setNewRecruiter] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: ""
    });
    
    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        
        if (companySearchID) {
            setNewRecruiter({
                ...newRecruiter,
                [key]: value,
                admin: false,
                company_id: companySearchID
            })  
        } else {
            setNewRecruiter({
                ...newRecruiter,
                [key]: value,
                admin: true,
                company: newCompany.name
            })
        }
    }

    const handleRecruiterSubmit = (e) => {
        e.preventDefault();
        console.log(newRecruiter)
        createNewRecruiter(newRecruiter)
        navigate('/dashboard');
    };


// if (companySearchResult) return <FormCompany />
    return(
        <div id="formsignup-container">
            <div className="exit">
                <Link to="/" >
                    <Icon className="exit-icon" name="x" size='large' />
                </Link>
            </div>
            <h1>Join {companySearchName || newCompany.name }</h1>
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
                <Link to="/" >
                    <Button color='black' size='large' onClick={(e) => {handleRecruiterSubmit(e)}}>Sign Up</Button>
                </Link>
            </form>
        </div>
    )
}

export default FormSignup;

