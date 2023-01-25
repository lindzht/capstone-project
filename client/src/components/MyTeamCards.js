import {  Icon } from 'semantic-ui-react'

function MyTeamCards ({team, currentUser}){


    return(
        <div className="team-card-container">
            <div id="team-card-top">
                {/* <Icon name="thumbtack" id="team-card-thumbnail"/> */}
            </div>
            <div id="team-description">
                {team.name.includes(currentUser.company.name) ? <h2><span>{team.name} </span></h2> : <h2>{team.name}</h2>}
                <div id="team-data">
                    <div><Icon id="team-data-icon" name="user circle" /> {team.recruiters.length} Recruiters</div>
                    <div><Icon id="team-data-icon" name="check circle outline"/> {team.reqs.length} Reqs</div>
                </div> 
            </div>
        </div>
    )
}

export default MyTeamCards;