import React from 'react'
import TeamSubNav from "./TeamSubNav";
// import MyReqs from "./MyReqsPage";
import { Icon, Table } from 'semantic-ui-react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TeamReqs from "./TeamReqs";
import _ from 'lodash'


function TeamDashboard ( {currentUser} ){
    // const [currentTeam, setCurrentTeam] = useState({reqs: []})
    const [currentTeam, setCurrentTeam] = useState(null)

    
    let params = useParams();
    let teamID = params.teamId
    console.log(teamID)
    
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

//     console.log(currentUser.reqs)
   console.log(currentTeam)

   function test(){
       console.log(currentTeam.reqs)
       return( currentTeam.reqs.map((req) => {
        return(
            <p id={req.id}>{req.name}</p>
        )
        }))
   }

   function bloop (){
        return(<TeamReqs currentTeam={currentTeam}/>)

   }


//    const sam = false 
//    sam ? 
//         let lindsay = ":)" 
//         : 
//         lindsay = ":("

    const tableData = currentTeam && currentTeam.reqs
    console.log(tableData)

    function exampleReducer(state, action) {
    switch (action.type) {
        case 'CHANGE_SORT':
        if (state.column === action.column) {
            return {
            ...state,
            data: state.data.slice().reverse(),
            direction:
                state.direction === 'ascending' ? 'descending' : 'ascending',
            }
        }
        return {
            column: action.column,
            data: _.sortBy(state.data, [action.column]),
            direction: 'ascending',
        }
        default:
        throw new Error()
    }
    }

    const [state, dispatch] = React.useReducer(exampleReducer, {
    column: null,
    data: tableData,
    direction: null,
    })
    const { column, data, direction } = state








    return(
        <div className="dashboard-container">
            <div id="user-display">
                <Link to="/dashboard">
                    <Icon id="icon-home" name="home"></Icon>
                </Link>
                <Link to="/settings">
                    <Icon name="user circle"></Icon><p>{currentUser && currentUser.first_name} {currentUser.admin? "(Admin)" : null}</p>
                </Link>
            </div>
            <div className="dashboard-header">
                {currentTeam ? <h1>{currentTeam.name} 's Board</h1> : "Nope"}
            </div>
            <TeamSubNav />
            {!currentTeam  ? 
                // <TeamReqs currentTeam={currentTeam} currentUser={currentUser}/>
                
                
                "Loading..."
                :
                
                <div className='req-container'>
                    {test()}
                    {bloop()}

                    {/* 
                    <Table sortable celled fixed>
                    <Table.Header>
                        <Table.Row>
                        <Table.HeaderCell
                            sorted={column === 'req_id' ? direction : null}
                            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'req_id' })}
                            id="req-id-column"
                        >
                            <p >Req ID</p>
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'name' ? direction : null}
                            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'name' })}
                        >
                            Name
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'org' ? direction : null}
                            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'org' })}
                        >
                            Team
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'hiring_manager' ? direction : null}
                            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'hiring_manager' })}
                        >
                            Hiring Manager
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'open_date' ? direction : null}
                            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'open_date' })}
                        >
                            Role Open Date
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'hire_goal' ? direction : null}
                            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'hire_goal' })}
                        >
                            Goal Hire Date
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'is_hired' ? direction : null}
                            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'is_hired' })}
                        >
                            Hired Status
                        </Table.HeaderCell>
                        <Table.HeaderCell id="edit-req">
                            Edit
                        </Table.HeaderCell>
                        
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {data.map(({ req_id, name, org, hiring_manager, open_date, hire_goal, is_hired, hired_date, candidate, candidate_app }) => (
                        <Table.Row id={is_hired? "req-row-hired" : "req-row"} key={req_id}>
                            <Table.Cell>{req_id}</Table.Cell>
                            <Table.Cell>{name}</Table.Cell>
                            <Table.Cell>{org}</Table.Cell>
                            <Table.Cell>{hiring_manager}</Table.Cell>
                            <Table.Cell>{open_date}</Table.Cell>
                            <Table.Cell>{hire_goal}</Table.Cell>
                            <Table.Cell>{is_hired ? "True" : "False"}</Table.Cell>
                            <Table.Cell><Icon name="pencil alternate" size='small'/></Table.Cell>
                        </Table.Row>
                        ))}
                    </Table.Body>
                    </Table> */}
              </div>
            }

        </div> 
    )
}

export default TeamDashboard;