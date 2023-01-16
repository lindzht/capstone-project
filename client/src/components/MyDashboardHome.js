import MyTeamCards from "./MyTeamCards";
import { Icon } from 'semantic-ui-react';
import { useState } from "react";
import AddTeamCard from "./AddTeamCard";

function MyDashboardHome({currentUser, newTeam, setNewTeam, createNewTeam}) {

    const [newTeamForm, setNewTeamCard] = useState(false);

    const teamCards = currentUser.teams.map((team) => {
        return (<MyTeamCards key={team.id} team={team} />)
    })

    const handleDisplayTeamForm = () => {
        setNewTeamCard(!newTeamForm);
    }


    return(
        <div className="dashboard-content-container">
            <div id="dashboard-content-left">
                <div id="team-block">
                    <div id="team-block-header">
                        <h3>{currentUser.admin ? currentUser.company.name : "My"} Teams</h3>
                        {currentUser.admin ? <Icon name="add circle" size="big" className="add-icon" onClick={handleDisplayTeamForm} /> : null}
                    </div>
                    {newTeamForm ? <AddTeamCard newTeam={newTeam} setNewTeam={setNewTeam} createNewTeam={createNewTeam}/> : null}
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