import { Table, Icon, Button } from 'semantic-ui-react'
import { useState } from 'react'
import { format, addDays, subDays } from 'date-fns'


function TeamReqRow({ deleteReq, deleteReqFromTeam, id, req_id, name, org, hiring_manager, open_date, hire_goal, hired_status, hired_date, candidate, candidate_app, recruiter, displayDeleteIcon, displayEditIcon, currentTeam, updateReq }) {
    
    // const todaysDate2 = format(addDays(new Date(), 10), 'yyyy-MM-dd')
    // const twoWeeksAgo = format(subDays(hire_goal, 14), 'yyyy-MM-dd')
    // console.log(hire_goal)

    // const rowColors = ()=> {
    //     console.log(hire_goal)
    //     const today = format(new Date(), 'yyyy-MM-dd')
    //     const goal = format(new hire_goal, 'yyyy-MM-dd')
    //     const twoWeeksAgo = format(subDays(hire_goal, 14), 'yyyy-MM-dd')
    //     console.log(twoWeeksAgo)
        // if (today >= twoWeeksAgo ) {
        //     return("req-row-alert")
        // } else {
        //     return("req-row")
        // }
  

    

    const [displayEditForm, setDisplayEditForm] = useState(false)
    const [editTeamReq, setEditTeamReq] = useState({
        id: id,
        req_id: req_id,
        name: name,
        org: org,
        hiring_manager: hiring_manager,
        open_date: open_date,
        hire_goal: hire_goal,
        hired_status: hired_status,
        recruiter_id: recruiter ? recruiter : "",
        hired_date: hired_date ? hired_date : "",
        candidate: candidate ? candidate : "",
        candidate_app: candidate_app ? candidate_app : ""
        })

    const handleDelete = (id) => {
        if (currentTeam.name.includes(currentTeam.company.name)) {
            deleteReq(id)
        } else {
            deleteReqFromTeam({ req_id: id, team_id: currentTeam.id })
        }
    }

    const recruiterListOptions = currentTeam.recruiters.map((recruiter) => {
        return (
            <option value={recruiter.id}>{recruiter.first_name} {recruiter.last_name}</option>
        )
    })

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setEditTeamReq({
            ...editTeamReq,
            [key]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        updateReq(editTeamReq)
    } 




    return (
        <>
            {!displayEditForm ?
                <Table.Body>
                    <Table.Row id={"req-row"} key={req_id}>
                        <Table.Cell>{req_id}</Table.Cell>
                        <Table.Cell onClick={() => { console.log(id) }}>{name}</Table.Cell>
                        <Table.Cell>{org}</Table.Cell>
                        {recruiter && recruiter.first_name ? <Table.Cell>{recruiter.first_name} {recruiter.last_name}</Table.Cell> : <Table.Cell></Table.Cell>}
                        <Table.Cell>{hiring_manager}</Table.Cell>
                        <Table.Cell>{open_date}</Table.Cell>
                        <Table.Cell >{hire_goal}</Table.Cell>
                        <Table.Cell>{hired_status}</Table.Cell>
                        {hired_status === "Hired" ? 
                            <>
                            <Table.Cell>{hired_date}</Table.Cell>
                            <Table.Cell>{candidate}</Table.Cell>
                            <Table.Cell>{candidate_app}</Table.Cell>
                            </>
                        : null}
                        {displayDeleteIcon ? <Table.Cell id="edit-req-row" ><Icon name="x" id="delete-req-icon" onClick={() => { handleDelete(id) }} /></Table.Cell> : null}
                        {displayEditIcon ? <Table.Cell id="edit-req-row" ><Icon name="pencil" id="edit-req-icon" onClick={() => { setDisplayEditForm(!displayEditForm) }} /></Table.Cell> : null}
                    </Table.Row>
                </Table.Body>

                :

                <Table.Body>
                    <Table.Row id={displayEditForm ? "req-form" : null} key={req_id}>
                        <Table.Cell id="req-form-cell">
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    name="req_id"
                                    placeholder="Req ID"
                                    value={editTeamReq.req_id}
                                    onChange={handleChange} />
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Title"
                                    value={editTeamReq.name}
                                    onChange={handleChange} />
                                <input
                                    type="text"
                                    name="org"
                                    placeholder="Team/Org"
                                    value={editTeamReq.org}
                                    onChange={handleChange} />
                                <input
                                    type="text"
                                    name="hiring_manager"
                                    placeholder="Hiring Manager"
                                    value={editTeamReq.hiring_manager}
                                    onChange={handleChange} />
                                <br />
                                <br />
                                <br />
                                <label id="label-2">Req Open Date:</label>
                                <input
                                    type="date"
                                    name="open_date"
                                    placeholder="Open Date"
                                    onChange={handleChange}
                                    value={editTeamReq.open_date} />
                                <label id="label-2">Goal Hire Date:</label>
                                <input
                                    type="date"
                                    name="hire_goal"
                                    placeholder="Goal Hire Date"
                                    value={editTeamReq.hire_goal}
                                    onChange={handleChange} />
                                <label id="label-2">Req Status:</label>
                                <select name='hired_status' value={editTeamReq.hired_status} onChange={handleChange}>
                                    <option value="">Select</option>
                                    <option value="Open">Open</option>
                                    <option value="Hired">Hired</option>
                                    <option value="On Track">On Track</option>
                                    <option value="Off Track">Off Track</option>
                                </select>
                                <br />
                                <br />
                                <br />
                                <label id="label-2">Recruiter:</label>
                                <select name='recruiter_id' value={editTeamReq.recruiter_id} onChange={handleChange}>
                                    <option value="">Select</option>
                                    {recruiterListOptions}
                                </select>
                                <input
                                    type="text"
                                    name="candidate"
                                    placeholder="Hired Candidate Name"
                                    value={editTeamReq.candidate}
                                    onChange={handleChange} />
                                <label id="label-2">Date Candidate Hired:</label>
                                <input
                                    type="date"
                                    name="hired_date"
                                    placeholder="Date Candidate Hired"
                                    value={editTeamReq.hired_date}
                                    onChange={handleChange} />
                                <br />
                                <br />
                                <br />
                                <label id="label-2">Date Candidate Applied:</label>
                                <input
                                    type="date"
                                    name="candidate_app"
                                    placeholder="Date Candidate Applied"
                                    value={editTeamReq.candidate_app}
                                    onChange={handleChange} />
                                <Button color="black" onSubmit={handleSubmit}>Submit</Button>
                                <Button color="black" onClick={() => { setDisplayEditForm(!displayEditForm) }}>Cancel</Button>
                                
                            </form>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>}
                
        </>

    )
}

export default TeamReqRow;