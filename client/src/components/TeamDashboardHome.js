import MyTeamCards from "./MyTeamCards";
import { Icon } from 'semantic-ui-react';
import { useState } from "react";
import {  Link, useNavigate } from 'react-router-dom';
import AddTeamCard from "./AddTeamCard";
import AdminTeamCards from "./AdminTeamCards";
import TeamReqs from "./TeamReqs";
import TeamRecruiters from "./TeamRecruiters";

function TeamDashboardHome({currentUser, currentTeam}) {

    function renderOpenReqTable (){
        return(<TeamReqs currentTeam={currentTeam}/>)
    }

    function renderRecruiters(){
        return(<TeamRecruiters currentTeam={currentTeam}/>)
    } 

    // function renderRecruiters(){
    //     return(
    //         currentTeam.recruiters.map((recruiter)=>{
    //             return(<p>{recruiter.first_name}</p>)
    //         })
    //     )
    // } 





    return(
        <div id="team-container">
            <div id="team-container-left">
                <div className="dashboard-content-container">
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
                    {!currentTeam  ?      
                        <h3>"Loading..."</h3>
                        : 
                        <div className='req-container'>
                            <h1>Open Reqs</h1>
                            {/* {test()} */}
                            {renderOpenReqTable()}
                            {/* <TeamDashboardHome /> */}
                        </div>
                    }
            </div>
            <div id="team-container-right">
                <div id="team-block">
                        <h3>Teammates</h3>
                        {!currentTeam  ?      
                            <h3>"Loading..."</h3>
                            : 
                            <div className='team-recruiters'>
                                {renderRecruiters()}
                            </div>
                        }
                </div>
            </div>

        </div>
    )
}

export default TeamDashboardHome;