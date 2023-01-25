import React from 'react'
import TeamSubNav from "./TeamSubNav";
import { Icon, } from 'semantic-ui-react';
import { Link,  useParams } from 'react-router-dom';



function TeamDashboard ( {currentTeam, currentUser, setSelectTeamID} ){

    let params = useParams();
    setSelectTeamID(params.teamId)
    
    return(
        <div className="dashboard-container">
            <div id="user-display">
                <Link to="/dashboard">
                    <Icon id="icon-home" name="home"></Icon>
                </Link>
                <Link to="/settings">
                    <Icon name="user circle"></Icon><p>{currentUser && currentUser.first_name} <span>{currentUser.admin? `(Admin)` : null}</span></p>
                </Link>
            </div>
            <div className="dashboard-header">
                {currentTeam ? <h1>{currentTeam.name} 's Board</h1> : null}
            </div>
                <TeamSubNav />

        </div> 
    )
}

export default TeamDashboard;