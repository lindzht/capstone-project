import { Button } from 'semantic-ui-react'
import { useState } from 'react';
import FormCompany from './FormCompany';

function FormSignup ({companySearchResult}){

// if (companySearchResult) return <FormCompany />
    return(
        <div id="formsignup-container">
            <form >
                <input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                     />
                <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                     />
                <input
                    type="text"
                    name="email"
                    placeholder="Email Address"
                     />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                     />
                <input
                    type="password"
                    name="password_confirmation"
                    placeholder="Password Confirmation"
                     />
                <input 
                    type="submit"
                    text="Submit" />
            </form>
        </div>
    )
}

export default FormSignup;