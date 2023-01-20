import Select from 'react-select';
import { useState } from "react";
import { useParams} from 'react-router-dom';
import { Button } from 'semantic-ui-react'


function TeamAddReq ( {companies, currentTeam, addNewReq} ){
    let params = useParams();
    const [reqSearchID, setReqSearchID] = useState(null)
    const [newTeamReq, setNewTeamReq] = useState({
        req_id: "",
        name: "",
        org: "",
        hiring_manager: "",
        open_date: "",
        hire_goal: "",
        hired_status: "",
    })

    console.log(currentTeam.company.id)
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

    const handleChange = (e) => { 
        const key = e.target.name;
        const value = e.target.value;
        setNewTeamReq({
            ...newTeamReq, 
            [key]: value,
            company_id: currentTeam.company.id
        })
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        addNewReq(newTeamReq)
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
                <h4>Add New Req</h4>
                <form  onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="req_id"
                        placeholder="Req ID"
                        value={newTeamReq.req_id}
                        onChange={handleChange}    />
                    <input
                        type="text"
                        name="name"
                        placeholder="Title"
                        value={newTeamReq.name}
                        onChange={handleChange}    />
                    <input
                        type="text"
                        name="org"
                        placeholder="Team/Org"
                        value={newTeamReq.org}
                        onChange={handleChange}    />
                    <input
                        type="text"
                        name="hiring_manager"
                        placeholder="Hiring Manager"
                        value={newTeamReq.hiring_manager}
                        onChange={handleChange}    />
                    Req Open Date
                    <input
                        type="date"
                        name="open_date"
                        placeholder="Open Date"
                        onChange={handleChange} 
                        value={newTeamReq.open_date}   />
                    Goal Hire Date
                    <input
                        type="date"
                        name="hire_goal"
                        placeholder="Goal Hire Date"
                        value={newTeamReq.hire_goal}
                        onChange={handleChange}    />
                    <select name='hired_status' value={newTeamReq.hired_status} onChange={handleChange}>
                        <option value="Open">Open</option>
                        <option value="Hired">Hired</option>
                        <option value="On Track">On Track</option>
                        <option value="Off Track">Off Track</option>
                    </select>
                    <input type="submit" value="Submit" />
                    {/* <Button>Add</Button> */}
                </form>
            
            </div>
            
          
        </div> 

    )
}

export default TeamAddReq;