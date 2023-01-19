import { Icon } from 'semantic-ui-react';
import { useParams, } from 'react-router-dom';
import { useState } from "react";
import TeamReqs from "./TeamReqs";
import TeamRecruiterCard from "./TeamRecruiterCard";
import AddRecruiterCard from './AddRecruiterCard';

function TeamDashboardHome({currentUser, currentTeam, deleteRecruiterFromTeam}) {
    let params = useParams();
    console.log(params);

    function renderOpenReqTable (){
        return(<TeamReqs currentTeam={currentTeam}/>)
    }

    // function renderRecruiters(){
    //     return(<TeamRecruiters currentTeam={currentTeam}/>)
    // } 

    // function renderRecruiters(){
    //     return(
    //         currentTeam.recruiters.map((recruiter)=>{
    //             return(<p>{recruiter.first_name}</p>)
    //         })
    //     )
    // } 

    function renderRecruiters (){
        return( 
            currentTeam.recruiters.map((recruiter) => {
                return(<TeamRecruiterCard currentTeam={currentTeam} recruiter={recruiter} deleteRecruiterFromTeam={deleteRecruiterFromTeam}/>)
            })
        )
    }


    console.log(currentTeam)


    return(
        <div id="team-container">
            <div id="team-container-left">
                    {currentTeam && currentTeam.id == params.teamId ?      
                        <div className='req-container'>
                            <div id="req-top-container">
                                <h1>Open Reqs</h1>
                                <Icon size="big" name="add circle" />
                            </div>

                            {/* {test()} */}
                            {renderOpenReqTable()}
                            {/* <TeamDashboardHome /> */}
                        </div>
                        : 
                        <h3>"Loading..."</h3>
                    }
            </div>
            <div id="team-container-right">

                <div id="dashboard-content-middle">
                        <div id="my-metrics-card-container">
                            <h1>{!currentTeam ? "Loading..." : currentTeam.open_reqs}</h1>
                            <h3>Open Reqs</h3>
                        </div>
                </div>
                <div id="dashboard-content-middle">
                    <div id="my-metrics-card-container">   
                            <h1>{!currentTeam ? "Loading..." : currentTeam.hired_reqs}</h1>
                            <h3>Hired Reqs</h3>
                    </div>
                </div>

                <div id="team-block">
                        <h3>Teammates</h3>
                        {!currentTeam  ?      
                            <h3>"Loading..."</h3>
                            : 
                            <div className='team-recruiters'>
                                {renderRecruiters()}
                                <Icon name="add" className='add-icon' />
                                <AddRecruiterCard />
                            </div>
                        }
                </div>

            </div>

        </div>
    )
}

export default TeamDashboardHome;