import MyTeamCards from "./MyTeamCards";
import { Icon } from 'semantic-ui-react';
import { useState } from "react";
import {  Link, useNavigate } from 'react-router-dom';
import AddTeamCard from "./AddTeamCard";
import AdminTeamCards from "./AdminTeamCards";

function MyDashboardHome({currentUser, newTeam, setNewTeam, createNewTeam, setNewData}) {
    let navigate = useNavigate();
    

    const [newTeamForm, setNewTeamCard] = useState(false);
    const myTeamCards = currentUser.teams.map((team) => {
        return (
            <div onClick={()=> { navigate(`/teams/${team.id}`)}} >
                <MyTeamCards key={team.id} team={team} />
            </div>
        )
    })

    const companyTeamCards = currentUser.company.teams.map((team) => {
        return (
            <div>
                <AdminTeamCards key={team.id} team={team} navigate={navigate} />
            </div>
        )   
    })

    const handleDisplayTeamForm = () => {
        setNewTeamCard(!newTeamForm);
    }


    return(
        <div className="dashboard-content-container">

            <div id="dashboard-content-top">
                <div id="team-block">
                    <div id="team-block-header">
                        <h3>My Team Boards</h3>
                    </div>
                    {myTeamCards} 
                </div>

                <div id="my-metrics-card-container">
                    <h3>My Metrics</h3>
                </div>

                <div id="my-metrics-card-container">
                    <h3>My Metrics</h3>
                </div>
                
            </div>  

            
                
            

            {currentUser.admin ? 
                <div id="dashboard-content-bottom">
                    <div id="admin-team-container">
                        <div id="admin-team-header">
                            <h3>{currentUser.company.name} Team Boards</h3>
                            <Icon name="add circle" size="big" className="add-icon" onClick={handleDisplayTeamForm} />
                        </div>
                        {newTeamForm ? <AddTeamCard newTeam={newTeam} setNewTeam={setNewTeam} createNewTeam={createNewTeam} currentUser={currentUser}/> : null}
                        {companyTeamCards}
                    </div>
                    <div id="admin-recruiter-container">
                        <div id="admin-team-header">
                            <h3>{currentUser.company.name} Recruiters</h3>
                            {/* <Icon name="add circle" size="big" className="add-icon"  /> */}
                        </div>
                    </div>
                    
                </div>
                : 
                null   
            }
              

        </div>
    )
}

export default MyDashboardHome;