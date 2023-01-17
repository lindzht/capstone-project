import MyTeamCards from "./MyTeamCards";
import { Icon } from 'semantic-ui-react';
import { useState } from "react";
import {  Link, useNavigate } from 'react-router-dom';
import AddTeamCard from "./AddTeamCard";
import AdminTeamCards from "./AdminTeamCards";

function MyDashboardHome({currentUser, newTeam, setNewTeam, createNewTeam}) {
    let navigate = useNavigate();
    const [newTeamForm, setNewTeamCard] = useState(false);

    const myTeamCards = currentUser.teams.map((team) => {
        return (
            <div onClick={()=> {navigate(`/teams/${team.id}`)}} >
                <MyTeamCards key={team.id} team={team} />
            </div>
        )
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
                        <h3>My Team Boards</h3>
                    </div>
                    {myTeamCards} 
                </div>
            </div>  

            {currentUser.admin ? 
                <div id="dashboard-content-middle">
                    <div id="admin-team-container">
                        <div id="admin-team-header">
                            <h3>{currentUser.company.name} Team Boards</h3>
                            <Icon name="add circle" size="big" className="add-icon" onClick={handleDisplayTeamForm} />
                        </div>
                        {newTeamForm ? <AddTeamCard newTeam={newTeam} setNewTeam={setNewTeam} createNewTeam={createNewTeam} currentUser={currentUser}/> : null}
                        {companyTeamCards}
                    </div>
                </div>
                : 
                null   
            }
              
            <div id="dashboard-content-right">
                <div id="my-metrics-card-container">
                    <h3>My Metrics</h3>
                </div>
                {/* <div id="my-goals-card-container">
                    <h3>My Goals</h3>
                </div> */}
            </div>
        </div>
    )
}

export default MyDashboardHome;