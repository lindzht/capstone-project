import { Card,  Icon } from 'semantic-ui-react'

function MyTeamCards ({team}){


    return(
        <div className="team-card-container">
            <div id="team-card-top">
                {/* <Icon name="thumbtack" id="team-card-thumbnail"/> */}
            </div>
            <div id="team-description">
                <h2>{team.name}</h2>
                <div id="team-data">
                    <div><Icon id="team-data-icon" name="user circle" /> {team.recruiters.length} Recruiters</div>
                    <div><Icon id="team-data-icon" name="check circle outline"/> {team.reqs.length} Reqs</div>
                </div>
                
            </div>
        
            {/* <Card>
                <Card.Content id="card-content-top">
                    <Card.Header>{team.name}</Card.Header>
                    <div id="team-data">
                        <Icon id="team-data-icon" name="user circle"> {team.recruiters.length} Recruiters</Icon>
                        <Icon id="team-data-icon" name="check circle outline"> {team.reqs.length} Reqs</Icon>
                    </div>
                </Card.Content>
            </Card> */}
        </div>
    )
}

export default MyTeamCards;