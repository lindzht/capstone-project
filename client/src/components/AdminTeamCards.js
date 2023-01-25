import { Card, Icon } from 'semantic-ui-react'

function AdminTeamCards ({team, navigate, deleteTeam}){
    
    return(
        <div id="admin-team-list">
            <Icon onClick={() => {deleteTeam(team.id)}} id="admin-delete-icon" name="x" />  
            <h5 onClick={()=> {navigate(`/teams/${team.id}`)}}>{team.name}</h5>
        </div>
    )
}

export default AdminTeamCards;


{/* <div className="admin-team-card-container">
<Card>
    <Card.Content id="admin-card-content-top">
        <Card.Header onClick={()=> {navigate(`/teams/${team.id}`)}} ><h5>{team.name}</h5></Card.Header>
        <Icon onClick={() => {deleteTeam(team.id)}} id="admin-delete-icon" name="x" />
    </Card.Content>
</Card>
</div> */}