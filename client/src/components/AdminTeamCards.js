import { Card, Icon } from 'semantic-ui-react'

function AdminTeamCards ({team}){
    
    return(
        <div className="admin-team-card-container">
            <Card>
                <Card.Content id="admin-card-content-top">
                    <Card.Header><h5>{team.name}</h5></Card.Header>
                    <Icon id="admin-edit-icon" name="pencil alternate" />
                </Card.Content>
            </Card>
        </div>
    )
}

export default AdminTeamCards;