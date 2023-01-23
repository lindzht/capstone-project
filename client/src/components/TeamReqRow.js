import { Table, Icon } from 'semantic-ui-react'


function TeamReqRow ({deleteReq, deleteReqFromTeam, id, req_id, name, org, hiring_manager, open_date, hire_goal, hired_status, hired_date, candidate, candidate_app, recruiter, displayDeleteIcon, displayEditIcon, currentTeam }){
    
    const handleDelete =(id) => {
        if (currentTeam.name.includes(currentTeam.company.name)){
          deleteReq(id)
        } else {
          deleteReqFromTeam({req_id: id, team_id: currentTeam.id})
        }
      }
  



    return(
        <Table.Body>
                       
          <Table.Row id={hired_status === "Hired" ? "req-row-hired" : "req-row"} key={req_id}>
            <Table.Cell>{req_id}</Table.Cell>
            <Table.Cell onClick={()=>{console.log(id)}}>{name}</Table.Cell>
            <Table.Cell>{org}</Table.Cell>
            {recruiter && recruiter.first_name ? <Table.Cell>{recruiter.first_name} {recruiter.last_name}</Table.Cell> : <Table.Cell></Table.Cell>}
            <Table.Cell>{hiring_manager}</Table.Cell>
            <Table.Cell>{open_date}</Table.Cell>
            <Table.Cell>{hire_goal}</Table.Cell>
            <Table.Cell>{hired_status}</Table.Cell> 
            {displayDeleteIcon ? <Table.Cell id="edit-req-row" ><Icon name="x" id="delete-req-icon" onClick={() => {handleDelete(id)}} /></Table.Cell> : null}
            {displayEditIcon ? <Table.Cell id="edit-req-row" ><Icon name="pencil" id="edit-req-icon" /></Table.Cell> : null}
            {/* <Table.Cell id="edit-req-row" ><Icon name="pencil" id="edit-req-icon"/><Icon name="x" id="delete-req-icon" onClick={() => {handleDelete(id)}}/></Table.Cell> */}

          </Table.Row>

      </Table.Body>
    )
}

export default TeamReqRow;