import MyTeamCards from "./MyTeamCards";
import { Icon } from 'semantic-ui-react';

function MyDashboardHome({currentUser}) {

    const teamCards = currentUser.teams.map((team) => {
        return (<MyTeamCards key={team.id} team={team} />)
    })


    return(
        <div className="dashboard-content-container">
            <div id="dashboard-content-left">
                <div id="team-block">
                    <h3>My Teams</h3>
                    {currentUser.admin ? <Icon name="add circle" size="big" /> : null}
                    {teamCards}
                </div>
            </div>  
            <div id="dashboard-content-right">
                <div id="my-content-blocks">
                    <h3>My Goals</h3>
                    <h3>My Metrics</h3>
                </div>
            </div>  
        </div>
    )
}

export default MyDashboardHome;