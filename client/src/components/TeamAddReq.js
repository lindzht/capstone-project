import Select from 'react-select';
import { useState } from "react";
import { useParams} from 'react-router-dom';
import { Button } from 'semantic-ui-react'


function TeamAddReq ( {companies, currentTeam, addNewReq, newTeamReq, setNewTeamReq, setNewData} ){
    let params = useParams();
    const [reqSearchID, setReqSearchID] = useState(null)
    // const [newTeamReq, setNewTeamReq] = useState({
    //     req_id: "",
    //     name: "",
    //     org: "",
    //     hiring_manager: "",
    //     open_date: "",
    //     hire_goal: "",
    //     hired_status: "",
    // })

    // console.log(currentTeam.company.id)
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
        setReqSearchID({id: e.value, team_id: currentTeam.id})
    }

   

    const handleChange = (e) => { 
        const key = e.target.name;
        const value = e.target.value;
        
        setNewTeamReq({
            ...newTeamReq, 
            [key]: value,
            company_id: currentTeam.company.id,
            team_id: currentTeam.id,
        })
    }

    console.log(reqSearchID)
    const handleSubmit =(e)=>{
        e.preventDefault();

        if (reqSearchID !== null) {
            addNewReq(reqSearchID)
        } else {
            addNewReq(newTeamReq)
        }
        setNewData(newTeamReq)
        setNewTeamReq({
            req_id: "",
            name: "",
            org: "",
            hiring_manager: "",
            open_date: "",
            hire_goal: "",
            hired_status: "",})
    }

    const recruiterListOptions = currentTeam.recruiters.map((recruiter)=> {
        return(
            <option value={recruiter.id}>{recruiter.first_name} {recruiter.last_name}</option>
        )
    })

    // <option value="Open">Open</option>

    return(
        <div className="team-addreq-container">
            <div id="team-find-req">
                <h4>Add Existing Req</h4>
                <div id="team-find-search">
                    <Select 
                        id="company-search"
                        options={companyReqsSearchInput} 
                        onChange={reqSelected}/>
                    <Button color="black" onClick={handleSubmit}>Add</Button>
                </div>
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
                    <br />
                    <br />
                    
                    <label id="label-1">Req Open Date:</label>
                    <input
                        type="date"
                        name="open_date"
                        placeholder="Open Date"
                        onChange={handleChange} 
                        value={newTeamReq.open_date}   />
                    <label id="label-2">Goal Hire Date:</label>
                    <input
                        type="date"
                        name="hire_goal"
                        placeholder="Goal Hire Date"
                        value={newTeamReq.hire_goal}
                        onChange={handleChange}    />
                    <br />
                    <br />
                    <label id="label-2">Req Status:</label>
                    <select name='hired_status' value={newTeamReq.hired_status} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="Open">Open</option>
                        <option value="Hired">Hired</option>
                        <option value="On Track">On Track</option>
                        <option value="Off Track">Off Track</option>
                    </select>
                    <label id="label-2">Recruiter:</label>
                    <select name='recruiter_id' value={newTeamReq.recruiter_id} onChange={handleChange}>
                        <option value="">Select</option>
                        {recruiterListOptions}
                    </select>
                    {/* <input type="submit" value="Submit" /> */}
                    <Button color="black" onSubmit={handleSubmit}>Add</Button>
                </form>
            
            </div>
            
          
        </div> 

    )
}

export default TeamAddReq;