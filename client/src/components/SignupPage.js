import FormSignup from "./FormSignup";
import { useState } from "react";
import Select from 'react-select';
import FormCompany from "./FormCompany";
import landing_video from "../video/landing_video.mp4";

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
        setCompanySearch(e.label)
    }

    const handleDisplayCompanyForm =()=> {
        setDisplayCompanyForm(!displayCompanyForm)
    }


    return(
        <div id="signup-page-container">
            <div id="signup-content-container">
            {displayCompanyForm ? (<FormCompany companyFormResult={displayCompanyForm} createNewCompany={createNewCompany}/>) 
            : ( companySearch ? <FormSignup companySearchResult={companySearch} createNewRecruiter={createNewRecruiter} newCompany={newCompany}/> : 
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

            <div id="video-overlay">
                <video id="video-background" autoPlay loop muted>
                    <source src={landing_video} type="video/mp4" />
                </video>
                {/* <video id="video-background2" autoPlay loop muted>
                    <source src={landing_video} type="video/mp4" />
                </video> */}
            </div>
        </div>
    )
}

export default SignupPage;


