import { Icon } from 'semantic-ui-react';
import { useParams, } from 'react-router-dom';
import { useState } from "react";
import TeamReqs from "./TeamReqs";
import TeamRecruiterCard from "./TeamRecruiterCard";
import AddRecruiterCard from './AddRecruiterCard';
import TeamAddReq from './TeamAddReq';
import Loading from './Loading';

function TeamDashboardHome({ currentTeam, deleteRecruiterFromTeam, companies, addNewReq, setNewTeamReq, newTeamReq, setNewData, setReqSearchID, reqSearchID, setRecruiterSearchID, recruiterSearchID, createRecTeamRelationship, deleteReq, deleteReqFromTeam, updateReq, displayEditIcon, displayDeleteIcon, handleDisplayAddForm, handleDisplayEditIcons, handleDisplayDeleteIcons, displayAddForm, errors, setErrors}) {

    const [displayRecruiterForm, setDisplayRecruiterForm] = useState(false)
    let params = useParams();

    function renderOpenReqTable() {
        return (<TeamReqs currentTeam={currentTeam} deleteReq={deleteReq} deleteReqFromTeam={deleteReqFromTeam} displayEditIcon={displayEditIcon} displayDeleteIcon={displayDeleteIcon} updateReq={updateReq} />)
    }

    function renderRecruiters() {
        return (
            currentTeam.recruiters.map((recruiter) => {
                return (<TeamRecruiterCard key={recruiter.id} currentTeam={currentTeam} recruiter={recruiter} deleteRecruiterFromTeam={deleteRecruiterFromTeam} />)
            }))
    }

    return (

        <div id="team-container">
            {currentTeam && currentTeam.id == params.teamId ?
                <>
                    {displayAddForm ?
                        <>
                            <TeamAddReq
                                companies={companies}
                                currentTeam={currentTeam}
                                addNewReq={addNewReq}
                                setNewTeamReq={setNewTeamReq}
                                newTeamReq={newTeamReq}
                                setNewData={setNewData}
                                setReqSearchID={setReqSearchID}
                                reqSearchID={reqSearchID}
                                handleDisplayAddForm={handleDisplayAddForm}
                                errors={errors} />
                        </>
                        : null}
                    <div id="team-container-left">
                        <div className='req-container'>
                            <div id="req-top-container">
                                <h1>Open Reqs</h1>
                                {displayDeleteIcon && currentTeam.name.includes(currentTeam.company.name)? <h5>Note: Deleting reqs on this board will delete across all team boards.</h5>: null}
                                <div id="icons">
                                    <Icon id="add" name="add circle" onClick={handleDisplayAddForm} />
                                    <Icon id="edit" name="pencil" onClick={handleDisplayEditIcons} />
                                    <Icon id="delete" name="trash alternate outline" onClick={handleDisplayDeleteIcons} />
                                </div>
                            </div>
                            {renderOpenReqTable()}
                        </div>
                    </div>

                    <div id="team-container-right">
                        <div id="team-metrics-card-container">
                            <div className={currentTeam.hired_reqs > 0 ? "hired-highlight" : null}>
                                <h1>{currentTeam.hired_reqs} <span>Hired</span></h1>
                                <h3>Total Reqs</h3>
                            </div>
                        </div>
                        <div id="team-metrics-card-container">
                            <h1>{currentTeam.open_reqs} <span>Open</span></h1>
                            <h3>Total Reqs</h3>
                        </div>
                        {/* <div className="divider"></div> */}
                        <div id="team-metrics-card-container">
                            <h1>{currentTeam.avg_time_to_fill} <span>Days</span></h1>
                            <h4>Avg Time To Fill Req</h4>
                        </div>
                        <div id="team-metrics-card-container">
                            <h1>{currentTeam.avg_time_to_hire} <span>Days</span></h1>
                            <h4>Avg Time To Hire Candidate</h4>
                        </div>
                        <div id="team-block">
                            <h3>Teammates</h3>
                            <div className='team-recruiters'>
                                {renderRecruiters()}
                                {displayRecruiterForm ?
                                    <>
                                        <Icon name="minus circle" className='add-icon' onClick={() => { setDisplayRecruiterForm(!displayRecruiterForm); setErrors([]) }} />

                                        <AddRecruiterCard companies={companies} currentTeam={currentTeam} setRecruiterSearchID={setRecruiterSearchID}
                                            recruiterSearchID={recruiterSearchID}
                                            createRecTeamRelationship={createRecTeamRelationship} />
                                    </> :
                                    <Icon name="circle add" className='add-icon' onClick={() => { setDisplayRecruiterForm(!displayRecruiterForm) }} />}
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