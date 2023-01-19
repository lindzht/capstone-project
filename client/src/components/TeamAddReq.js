import Select from 'react-select';
import { useState } from "react";
import { useParams} from 'react-router-dom';



function TeamAddReq ( {currentUser, teamData, companies, currentTeam} ){
    let params = useParams();
    const [reqSearch, setReqSearch] = useState(null)
    const [reqSearchID, setReqSearchID] = useState(null)
    // const [displayNewReqForm, setdisplayNewReqForm] = useState(false)



    // const companiesSearchCompatible = companies.map((company) => {
    //     return( {label: company.name, value: company.id})
    // }) 

    // console.log(currentTeam.company.id)
    const currentCompanyReqs = companies.filter((company) => {
        if (company.id === currentTeam.company.id) {
            return(company.reqs)
        }
    })


    console.log(currentCompanyReqs[0].reqs)

    // console.log(currentCompanyReqs)

    const companyReqsSearchInput = currentCompanyReqs[0].reqs.map((req) => {
        return( {label: `${req.req_id} — ${req.name} `, value: req.id})
    }) 

    const companySelected = (e) => {
        setReqSearch(e.label)
        setReqSearchID(e.value)
    }

    return(
        <div className="team-settings-container">
            <div id="team-findreq-container">
                <h1>Find Reqs</h1>
                <Select 
                    id="company-search"
                    options={companyReqsSearchInput} 
                    onChange={companySelected}/>
            </div>
            <div id="team-addreq-container">
                <h1>Add Reqs</h1>

            </div>
          
          
        </div> 
    )
}

export default TeamAddReq;