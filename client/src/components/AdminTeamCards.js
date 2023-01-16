import { Card, Icon } from 'semantic-ui-react'

function AdminTeamCards ({team}){
    
    return(
        <div className="team-card-container">
            <Card>
                <Card.Content id="card-content-top">
                    <Icon name="pencil alternate" size='small'/>
                    <Card.Header>{team.name}</Card.Header>
                </Card.Content>
            </Card>
        </div>
    )
}

export default AdminTeamCards;