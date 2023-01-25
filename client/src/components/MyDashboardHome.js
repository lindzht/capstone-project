import MyTeamCards from "./MyTeamCards";
import { Icon} from 'semantic-ui-react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import AddTeamCard from "./AddTeamCard";
import AdminTeamCards from "./AdminTeamCards";
import Loading from "./Loading";
import MyReqs from "./MyReqs";

function MyDashboardHome({ currentUser, newTeam, setNewTeam, createNewTeam, deleteTeam }) {
    let navigate = useNavigate();

    const [newTeamForm, setNewTeamCard] = useState(false);
    const myTeamCards = currentUser.teams.map((team) => {
        return (
            <div onClick={() => { navigate(`/teams/${team.id}`) }} >
                <MyTeamCards key={team.id} team={team} />
            </div>
        )
    })

    const companyTeamCards = currentUser.company.teams.map((team) => {
        return (
            <div>
                <AdminTeamCards key={team.id} team={team} navigate={navigate} deleteTeam={deleteTeam} />
            </div>
        )
    })

    const companyRecruiterList = currentUser.company.recruiters.map((recruiter) => {
        return (
            <p className="admin-recruiter-list">
                {recruiter.first_name} {recruiter.last_name}
            </p>
        )
    })

    const handleDisplayTeamForm = () => {
        setNewTeamCard(!newTeamForm);
    }

    const goalArray = currentUser.reqs.filter((req)=>{
        return(req.hired_status !== "Hired")
    })

    const upcomingGoalDates = goalArray.slice(0,3)
   

    return (
        <div className="dashboard-content-container">
            <div id="dashboard-content-left">

                <div id="dashboard-content-top">
                    <div id="my-metrics-card-container">
                        <h1>{currentUser.open_reqs}</h1>
                        <h3>Total Open Reqs</h3>
                    </div>


                    <div id={currentUser.hired_reqs > 0 ? "hired-highlight" : "my-metrics-card-container"}>
                        <h1>{currentUser.hired_reqs}</h1>
                        <h3>Total Reqs Hired</h3>
                    </div>

                    <div id="my-metrics-card-container">
                        <h1>{currentUser.avg_time_to_fill} <span>Days</span></h1>
                        <h3>Avg Time to Fill Req</h3>
                    </div>

                    <div id="my-metrics-card-container">
                        <h1>{currentUser.avg_time_to_hire} <span>Days</span></h1>
                        <h3>Avg Time to Hire</h3>
                    </div>

                </div>

                <div id="dashboard-content-bottom">
                    <div id="my-boards-container">
                        <h3>My {currentUser.company.name} Boards</h3>
                        <div id="my-teams-container" className="scrollbar">
                            {myTeamCards}
                        </div>

                    </div>
                </div>
                <div>
                    {currentUser.reqs ? <MyReqs upcomingGoalDates={upcomingGoalDates} /> : <Loading />}
                </div>
            </div>



            {currentUser.admin ?
                <div id="my-dashboard-content-right">
                    <div id="admin-team-container">
                        <div id="admin-team-header">
                            <h4>Admin Settings</h4>
                            <h3>All {currentUser.company.name} Boards</h3>
                            <Icon name="add circle" size="big" className="add-icon" onClick={handleDisplayTeamForm} />
                        </div>
                        {newTeamForm ? <AddTeamCard newTeam={newTeam} setNewTeam={setNewTeam} createNewTeam={createNewTeam} currentUser={currentUser} /> : null}
                        {companyTeamCards}
                    </div>
                    <div id="admin-recruiter-container">
                        <div id="admin-team-header">
                            <h3>All {currentUser.company.name} Recruiters</h3>
                            {companyRecruiterList}
                        </div>
                    </div>
                    
                   
                </div>
                :
                null
            }

            <div className="space"></div>
        </div>
    )
}

export default MyDashboardHome;