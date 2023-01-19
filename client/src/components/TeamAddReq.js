import Select from 'react-select';
import { useState } from "react";
import { useParams} from 'react-router-dom';
import { Button } from 'semantic-ui-react'




function TeamAddReq ( {currentUser, teamData, companies, currentTeam} ){
    let params = useParams();
    const [reqSearchID, setReqSearchID] = useState(null)
    // const [displayNewReqForm, setdisplayNewReqForm] = useState(false)

    const currentCompanyReqs = companies.filter((company) => {
        if (company.id === currentTeam.company.id) {
            return(company.reqs)
        }
    })

    const companyReqsSearchInput = currentCompanyReqs[0].reqs.map((req) => {
        return( {label: `${req.req_id} — ${req.name} `, value: req.id})
    }) 

    const reqSelected = (e) => {
        setReqSearchID(e.value)
    }

    const AddReqForm = ()=> {
        return(
            <form>
                <input
                    type="text"
                    name="req_id"
                    placeholder="Req ID"
                        />
                <input
                    type="text"
                    name="name"
                    placeholder="Title"
                        />
                <input
                    type="text"
                    name="org"
                    placeholder="Team/Org"
                        />
                <input
                    type="text"
                    name="hiring_manager"
                    placeholder="Hiring Manager"
                        />
                <input
                    type="date"
                    name="open_date"
                    placeholder="Open Date"
                        />
                <input
                    type="date"
                    name="hire_goal"
                    placeholder="Goal Hire Date"
                        />
                <input
                    type="radio"
                    name="is_hired"
                    placeholder="Hired?"
                        />
                <input
                    type="date"
                    name="hired_date"
                    placeholder="Date Hired"
                        />
                    
                <input
                    type="text"
                    name="candidate"
                    placeholder="Candidate Hired"
                        />
                <input
                    type="date"
                    name="candidate_app"
                    placeholder="Candidate Application Date"
                        />
            </form>
        )
    }

    return(
        <div className="team-addreq-container">
            <div id="team-find-req">
                <h4>Add Existing Req</h4>
                <Select 
                    id="company-search"
                    options={companyReqsSearchInput} 
                    onChange={reqSelected}/>
                <Button>Add</Button>
            </div>
            <br />
            <div id="team-add-req">
                <h4>Add New Reqs</h4>
                <AddReqForm />
                <Button>Add</Button>

            </div>
          
          
        </div> 
    )
}

export default TeamAddReq;