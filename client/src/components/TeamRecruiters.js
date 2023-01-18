import {useState} from "react"
import { Icon } from 'semantic-ui-react'


function TeamRecruiters({currentTeam}){



    function renderRecruiters (){
        return( currentTeam.recruiters.map((recruiter)=> {
            return(
                <div id="recruiter-name">
                    <Icon name='x' className="delete-icon" />
                    {recruiter.first_name} {recruiter.last_name} 
                </div>
            )
        }) )
    }


    return(
        <div>
            {renderRecruiters()}
        </div>
    )
}

export default TeamRecruiters;