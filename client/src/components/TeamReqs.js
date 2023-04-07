import _ from 'lodash'
import React from 'react'
import { Table} from 'semantic-ui-react'
import TeamReqRow from './TeamReqRow'

  
function TeamReqs( {currentTeam, deleteReq, deleteReqFromTeam, displayDeleteIcon, displayEditIcon, updateReq}) {


    function RenderTable (){

      const tableData = currentTeam.reqs.filter((req) => {
        return req.hired_status !== "Hired"
      })

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

      const renderRows = data.map((eachReq) => {
        return(<TeamReqRow {...eachReq} key={eachReq.id} deleteReq={deleteReq} deleteReqFromTeam={deleteReqFromTeam} displayDeleteIcon={displayDeleteIcon} displayEditIcon={displayEditIcon} currentTeam={currentTeam} updateReq={updateReq}/>)
      })

      return(
        <>
            <Table sortable celled fixed>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell
                    // sorted={column === 'req_id' ? direction : null}
                    // onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'req_id' })}
                    id="req-id-column"
                  >
                    <p >Req ID</p>
                  </Table.HeaderCell>
                  <Table.HeaderCell
                    // sorted={column === 'name' ? direction : null}
                    // onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'name' })}
                  >
                    Name
                  </Table.HeaderCell>
                  <Table.HeaderCell
                    // sorted={column === 'org' ? direction : null}
                    // onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'org' })}
                  >
                    Team
                  </Table.HeaderCell>
                  <Table.HeaderCell
                    // sorted={column === 'recruiter' ? direction : null}
                    // onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'recruiter' })}
                  >
                    Recruiter
                  </Table.HeaderCell>
                  <Table.HeaderCell
                    // sorted={column === 'hiring_manager' ? direction : null}
                    // onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'hiring_manager' })}
                  >
                    Hiring Manager
                  </Table.HeaderCell>
                  <Table.HeaderCell
                    // sorted={column === 'open_date' ? direction : null}
                    // onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'open_date' })}
                  >
                    Role Open Date
                  </Table.HeaderCell>
                  <Table.HeaderCell
                    // sorted={column === 'hire_goal' ? direction : null}
                    // onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'hire_goal' })}
                  >
                    Goal Hire Date
                  </Table.HeaderCell>
                  <Table.HeaderCell
                    // sorted={column === 'hired_status' ? direction : null}
                    // onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'hired_status' })}
                  >
                    Status
                  </Table.HeaderCell>
                  {displayDeleteIcon || displayEditIcon ? <Table.HeaderCell id="edit-req-column"></Table.HeaderCell> : null}
                </Table.Row>
              </Table.Header>
                {renderRows}
            </Table>
        </>
      )
    }

    return (
      <>
        <RenderTable />
      </>
    )
  }
  

export default TeamReqs;