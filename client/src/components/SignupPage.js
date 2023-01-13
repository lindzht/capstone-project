import FormSignup from "./FormSignup";
import { useState } from "react";
import Select from 'react-select';
import FormCompany from "./FormCompany";

function SignupPage ({companies, createNewCompany, createNewRecruiter, newCompany}){

    // const [companySearch, setCompanySearch] = useState({
    //     name: ""
    // });

    // const handleChange = (e) => {
    //     const key = e.target.name;
    //     const value = e.target.value;

    //     setCompanySearch({
    //         ...companySearch,
    //         [key]: value
    //     })
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setCompanySearch(companySearch);
    // };

    const [companySearch, setCompanySearch] = useState(null)
    const [displayCompanyForm, setDisplayCompanyForm] = useState(false)

    const companiesSearchCompatible = companies.map((company) => {
        return( {label: company.name, value: company.id})
    }) 

    const companySelected = (e) => {
        setCompanySearch(e.value)
    }

    const handleDisplayCompanyForm =()=> {
        setDisplayCompanyForm(!displayCompanyForm)
    }


    return(
        <div id="signup-page-container">
            <div id="signup-content-container">
            {displayCompanyForm ? (<FormCompany companyFormResult={displayCompanyForm} createNewCompany={createNewCompany}/>) 
            : ( companySearch ? <FormSignup companySearchResultID={companySearch} createNewRecruiter={createNewRecruiter} newCompany={newCompany}/> : 
                <div>
                    <h3>Look for your company yo!</h3>
                    <Select 
                        id="company-search"
                        options={companiesSearchCompatible} 
                        onChange={companySelected}/>
                    <h4 onClick={handleDisplayCompanyForm}>Add yo company here</h4> 
                </div>
            ) }   
            </div>
        </div>
    )
}

export default SignupPage;


