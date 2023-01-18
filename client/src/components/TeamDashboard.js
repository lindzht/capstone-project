import TeamSubNav from "./TeamSubNav";
// import MyReqs from "./MyReqsPage";
import { Icon } from 'semantic-ui-react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TeamReqs from "./TeamReqs";


function TeamDashboard ( {currentUser, teamData} ){
    const [currentTeam, setCurrentTeam] = useState([])
    
    let params = useParams();
    let teamID = params.teamId
    console.log(teamID)
    console.log(currentUser.teams)
    
    useEffect(() => {
      fetch(`/teams/${teamID}`)
      .then(res => {
        if (res.ok){
          res.json()
          .then(data => {
            setCurrentTeam(data)
          })
        }
      })
    }, [teamID])

    console.log(currentTeam)



    return(
        <div className="dashboard-container">
            <div id="user-display"><Link to="/settings"><Icon name="user circle"></Icon><p>{currentUser && currentUser.first_name} {currentUser.admin? "(Admin)" : null}</p></Link></div>
            <div className="dashboard-header">
                <h1>{currentTeam.name} 's Board</h1>
            </div>
            <TeamSubNav />
            {/* <TeamReqs /> */}
        </div> 
    )
}

export default TeamDashboard;