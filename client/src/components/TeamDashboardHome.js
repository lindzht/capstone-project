import { Icon } from 'semantic-ui-react';
import { useParams, } from 'react-router-dom';
import { useState } from "react";
import TeamReqs from "./TeamReqs";
import TeamRecruiterCard from "./TeamRecruiterCard";
import AddRecruiterCard from './AddRecruiterCard';
import TeamAddReq from './TeamAddReq';
import Loading from './Loading';

function TeamDashboardHome({currentUser, currentTeam, deleteRecruiterFromTeam, companies, addNewReq}) {
    const [displayAddForm, setDisplayAddForm] = useState(false)
    const [displayRecruiterForm, setDisplayRecruiterForm] = useState(false)
    let params = useParams();

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


    function handleDisplayAddForm(){
        setDisplayAddForm(!displayAddForm);
    }


    return(
        <div id="team-container">
            {currentTeam && currentTeam.id == params.teamId ? 
            <>
            <div id="team-container-left"> 
                        <div className='req-container'>
                            <div id="req-top-container">
                                <h1>Reqs</h1>
                                <Icon size="big" name="add circle" onClick={handleDisplayAddForm} />   
                            
                            </div>
                            
                            {displayAddForm ? <TeamAddReq companies={companies} currentTeam={currentTeam} addNewReq={addNewReq}/> : null}

                            {/* {test()} */}
                            {renderOpenReqTable()}
                            {/* <TeamDashboardHome /> */}
                        </div>
                       
            </div>
            <div id="team-container-right">

                
                <div id="team-metrics-card-container">
                    <h1>{currentTeam.open_reqs}</h1>
                    <h3>Open Reqs</h3>
                </div>
                
                
                <div id="team-metrics-card-container"> 
                    <div className={currentTeam.hired_reqs > 0 ? "hired-highlight" : null }>
                        <h1>{currentTeam.hired_reqs}</h1>
                        <h3>Hired Reqs</h3>
                    </div>  
                </div>
            

                <div id="team-block">
                        <h3>Teammates</h3>
                        
                            <div className='team-recruiters'>
                                {renderRecruiters()}
                                <Icon name="circle add" className='add-icon' onClick={()=> {setDisplayRecruiterForm(!displayRecruiterForm)}} />
                                {displayRecruiterForm ? <AddRecruiterCard companies={companies} currentTeam={currentTeam} /> : null}
                            </div>
                        
                </div>

            </div>
            </>
            : 
            <Loading />
            }

        </div>
    )
}

export default TeamDashboardHome;