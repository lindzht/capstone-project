import MyTeamCards from "./MyTeamCards";
import { Icon } from 'semantic-ui-react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
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

    const companyRecruiterList = currentUser.company.recruiters.map((recruiter) => {
        return (
            <p>
                {recruiter.first_name} {recruiter.last_name}
            </p>
        )   
    })

    const handleDisplayTeamForm = () => {
        setNewTeamCard(!newTeamForm);
    }


    return(
        <div className="dashboard-content-container">
            <div id="my-dashboard-container">

                <div id="my-dashboard-content-left">
                    <div id="team-block">
                        <div id="team-block-header">
                            <h3>My Team Boards</h3>
                        </div>
                        {myTeamCards} 
                    </div>

                    <div id="my-dashboard-content-middle">
                        <div id="my-metrics-card-container-top">
                            <div id="my-open-reqs">
                                <h1>{currentUser.open_reqs}</h1>
                                <h3>Open Reqs</h3>
                            </div>
                            <div className={currentUser.hired_reqs > 0 ? "hired-highlight" : "hired-reqs" }>
                                <h1>{currentUser.hired_reqs}</h1>
                                <h3>Hired Reqs</h3>
                            </div>
                        </div>
                        <div id="my-metrics-card-container-bottom">
                            <h1>X</h1>
                            <h3>Avg Time to Hire</h3>
                            <p>Time req open to req closed</p>
                        </div>

                    </div>
                    
                    
{/* 
                    <div id="my-metrics-card-container">   
                        <h1>X</h1>
                        <h3>Avg Time to Hire</h3>
                        <p>Time req open to req closed</p>
                    </div> */}

                </div>

                {currentUser.admin ? 
                    <div id="dashboard-content-right">
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
                                {companyRecruiterList}
                            </div>
                        </div>
                        
                    </div>
                    : 
                    null }


            </div>    
             
        </div>
    )
}

export default MyDashboardHome;