import MyTeamCards from "./MyTeamCards";
import { Icon } from 'semantic-ui-react';
import { useState } from "react";
import AddTeamCard from "./AddTeamCard";
import AdminTeamCards from "./AdminTeamCards";

function MyDashboardHome({currentUser, newTeam, setNewTeam, createNewTeam}) {

    const [newTeamForm, setNewTeamCard] = useState(false);

    const myTeamCards = currentUser.teams.map((team) => {
        return (<MyTeamCards key={team.id} team={team} />)
    })

    const companyTeamCards = currentUser.company.teams.map((team) => {
        return (<AdminTeamCards key={team.id} team={team} />)
    })

    const handleDisplayTeamForm = () => {
        setNewTeamCard(!newTeamForm);
    }


    return(
        <div className="dashboard-content-container">
            <div id="dashboard-content-left">
                <div id="team-block">
                    <div id="team-block-header">
                        <h3>My Teams</h3>
                    </div>
                    {myTeamCards}
                </div>
            </div>  
            <div id="dashboard-content-right">
                <div id="my-content-blocks">
                    {currentUser.admin ? 
                        <div id="admin-team-container">
                            <div id="admin-team-header">
                                <h3>{currentUser.company.name} Teams</h3>
                                <Icon name="add circle" size="big" className="add-icon" onClick={handleDisplayTeamForm} />
                            </div>
                            {newTeamForm ? <AddTeamCard newTeam={newTeam} setNewTeam={setNewTeam} createNewTeam={createNewTeam} currentUser={currentUser}/> : null}
                            {companyTeamCards}
                        </div>
                    : 
                        null   
                    }
                    <h3>My Goals</h3>
                    <h3>My Metrics</h3>
                </div>
            </div>  
        </div>
    )
}

export default MyDashboardHome;