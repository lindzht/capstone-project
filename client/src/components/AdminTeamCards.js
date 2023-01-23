import { Card, Icon } from 'semantic-ui-react'

function AdminTeamCards ({team, navigate, deleteTeam}){
    
    return(
        <div className="admin-team-card-container">
            <Card>
                <Card.Content id="admin-card-content-top">
                    <Card.Header onClick={()=> {navigate(`/teams/${team.id}`)}} ><h5>{team.name}</h5></Card.Header>
                    {/* <Icon id="admin-edit-icon" name="pencil alternate" /> */}
                    <Icon onClick={() => {deleteTeam(team.id)}} id="admin-delete-icon" name="x" />
                </Card.Content>
            </Card>
        </div>
    )
}

export default AdminTeamCards;