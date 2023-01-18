import MyTeamCards from "./MyTeamCards";
import { Icon } from 'semantic-ui-react';
import { useState } from "react";
import {  Link, useNavigate } from 'react-router-dom';
import AddTeamCard from "./AddTeamCard";
import AdminTeamCards from "./AdminTeamCards";
import TeamReqs from "./TeamReqs";

function TeamDashboardHome({currentUser, newTeam, setNewTeam, createNewTeam, setSelectTeamID, fetchTeamData, teamData}) {


    return(
        <div id="team-container">
            <div className="dashboard-content-container">
                <div id="dashboard-content-left">
                    <div id="team-block">
                        <div id="team-block-header">
                            <h3>Teammates</h3>
                        </div>
                        {/* {myTeamCards}  */}
                    </div>
                </div>  

                <div id="dashboard-content-middle">
                    <div id="my-metrics-card-container">
                        <h3>Reqs Open</h3>
                        <h3>Reqs Hired</h3>
                    </div>
                </div>
                
                <div id="dashboard-content-right">
                    <div id="my-metrics-card-container">
                        <h3>Metrics</h3>
                    </div>
                </div>
            </div>
            {/* <TeamReqs currentUser={currentUser} teamData={teamData} /> */}
        </div>
    )
}

export default TeamDashboardHome;