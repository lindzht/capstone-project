// import TeamSubNav from "./TeamSubNav";
// import MyReqs from "./MyReqsPage";
// import { Icon } from 'semantic-ui-react';
import {useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';


function TeamSettings ( {currentUser, teamData} ){
    let params = useParams();
    let teamID = params.teamId
    



    return(
        <div className="team-settings-container">
          <h1>Team Settings</h1>
        </div> 
    )
}

export default TeamSettings;