import { Card,  Icon } from 'semantic-ui-react'

function MyTeamCards ({team, currentUser}){
    
    return(
        <div className="team-card-container">
            <Card>
                <Card.Content id="card-content-top">
                    <Card.Header>{team.name}</Card.Header>
                    <div id="team-data">
                        <Icon id="team-data-icon" name="user circle"> {team.recruiters.length} Recruiters</Icon>
                        <Icon id="team-data-icon" name="check circle outline"> {team.reqs.length} Reqs</Icon>
                    </div>
                </Card.Content>
            </Card>
        </div>
    )
}

export default MyTeamCards;