import React from 'react'
import TeamSubNav from "./TeamSubNav";
// import MyReqs from "./MyReqsPage";
import { Icon, Table } from 'semantic-ui-react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TeamReqs from "./TeamReqs";
import _ from 'lodash'


function TeamDashboard ( {currentUser, teamData} ){
    const [currentTeam, setCurrentTeam] = useState([])
    
    let params = useParams();
    let teamID = params.teamId
    console.log(teamID)
    console.log(currentTeam.reqs)
    
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

    // const tableData = currentTeam && currentTeam.reqs
    
    // function exampleReducer(state, action) {
    //   switch (action.type) {
    //     case 'CHANGE_SORT':
    //       if (state.column === action.column) {
    //         return {
    //           ...state,
    //           data: state.data.slice().reverse(),
    //           direction:
    //             state.direction === 'ascending' ? 'descending' : 'ascending',
    //         }
    //       }
    //       return {
    //         column: action.column,
    //         data: _.sortBy(state.data, [action.column]),
    //         direction: 'ascending',
    //       }
    //     default:
    //       throw new Error()
    //   }
    // }

    // const [state, dispatch] = React.useReducer(exampleReducer, {
    //   column: null,
    //   data: tableData,
    //   direction: null,
    // })
    // const { column, data, direction } = state

    return(
        <div className="dashboard-container">
            <div id="user-display"><Link to="/settings"><Icon name="user circle"></Icon><p>{currentUser && currentUser.first_name} {currentUser.admin? "(Admin)" : null}</p></Link></div>
            <div className="dashboard-header">
                <h1>{currentTeam.name} 's Board</h1>
            </div>
            <TeamSubNav />
            {/* <TeamReqs currentTeam={currentTeam} currentUser={currentUser}/> */}
            



        </div> 
    )
}

export default TeamDashboard;