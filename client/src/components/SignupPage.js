import FormSignup from "./FormSignup";
import { useState } from "react";
import { Icon } from 'semantic-ui-react'
import Select from 'react-select';
import FormCompany from "./FormCompany";
import landing_video from "../video/landing_video.mp4";
import { Link } from 'react-router-dom';

function SignupPage ({companies, createNewCompany, createNewRecruiter, newCompany, setNewCompany, newCompanyID}){

    const [companySearch, setCompanySearch] = useState(null)
    const [companySearchID, setCompanySearchID] = useState(null)
    const [displayCompanyForm, setDisplayCompanyForm] = useState(false)
    const [displaySignupForm, setDisplaySignupForm] = useState(false)

    const companiesSearchCompatible = companies.map((company) => {
        return( {label: company.name, value: company.id})
    }) 

    const companySelected = (e) => {
        setCompanySearch(e.label)
        setCompanySearchID(e.value)
    }

    const handleDisplayCompanyForm =()=> {
        setDisplayCompanyForm(!displayCompanyForm)
    }

    return(
        <div id="signup-page-container">
            { companySearch || displaySignupForm ? <FormSignup companySearchName={companySearch} createNewRecruiter={createNewRecruiter} newCompanyID={newCompanyID} companySearchID={companySearchID} newCompany={newCompany}/> : 
                <div id="signup-content-container">
                    <div className="exit">
                        <Link to="/" >
                            <Icon name="x" size='large' />
                        </Link>
                    </div>
                    <h3>Join Your Company:</h3>
                    <Select 
                        id="company-search"
                        options={companiesSearchCompatible} 
                        onChange={companySelected}/>
                    <h4 onClick={handleDisplayCompanyForm}>Don't See Your Company? Create Your Company Account Here!</h4> 
                    {displayCompanyForm ? <FormCompany createNewRecruiter={createNewRecruiter} newCompany={newCompany} setNewCompany={setNewCompany} newCompanyID={newCompanyID} setDisplaySignupForm={setDisplaySignupForm} /> : null}
                </div>
                }   
           

            <div id="video-overlay">
                <video id="video-background" autoPlay loop muted>
                    <source src={landing_video} type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

export default SignupPage;



// return(
//     <div id="signup-page-container">
//         {displayCompanyForm ? (<FormCompany companyFormResult={displayCompanyForm} createNewCompany={createNewCompany}/>) 
//         : ( companySearch ? <FormSignup companySearchResult={companySearch} createNewRecruiter={createNewRecruiter} newCompany={newCompany}/> : 
//             <div id="signup-content-container">
//                 <div className="exit">
//                     <Link to="/" >
//                         <Icon name="x" size='large' />
//                     </Link>
//                 </div>
//                 <h3>Join Your Company:</h3>
//                 <Select 
//                     id="company-search"
//                     options={companiesSearchCompatible} 
//                     onChange={companySelected}/>
//                 <h4 onClick={handleDisplayCompanyForm}>Don't See Your Company? Create Your Company Account Here!</h4> 
            
//             </div>
//         ) }   
       

//         <div id="video-overlay">
//             <video id="video-background" autoPlay loop muted>
//                 <source src={landing_video} type="video/mp4" />
//             </video>
//             {/* <video id="video-background2" autoPlay loop muted>
//                 <source src={landing_video} type="video/mp4" />
//             </video> */}
//         </div>
//     </div>
// )


