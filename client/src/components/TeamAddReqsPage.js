import Select from 'react-select';
import { useState } from "react";


function TeamAddReqsPage ( {currentUser, teamData} ){

    const [reqSearch, setReqSearch] = useState(null)
    const [reqSearchID, setReqSearchID] = useState(null)
    // const [displayNewReqForm, setdisplayNewReqForm] = useState(false)

    // const companiesSearchCompatible = companies.map((company) => {
    //     return( {label: company.name, value: company.id})
    // }) 

    const companySelected = (e) => {
        setReqSearch(e.label)
        setReqSearchID(e.value)
    }

    return(
        <div className="team-settings-container">
            <div id="team-findreq-container">
                <h1>Find Reqs</h1>
                {/* <Select 
                    id="company-search"
                    options={companiesSearchCompatible} 
                    onChange={companySelected}/> */}
            </div>
            <div id="team-addreq-container">
                <h1>Add Reqs</h1>
            </div>
          
          
        </div> 
    )
}

export default TeamAddReqsPage;