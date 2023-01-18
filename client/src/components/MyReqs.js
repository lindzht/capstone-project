import _ from 'lodash'
import React from 'react'
import { Table, Icon } from 'semantic-ui-react'

  
function MyReqs( {currentUser}) {
  

    const tableData = currentUser.reqs
    
    
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
  
    return (
      <div className='req-container'>
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
              <Table.HeaderCell id="edit-req-column">
                Edit
              </Table.HeaderCell>
              <Table.HeaderCell id="delete-req-column">
                Delete
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
                <Table.Cell><Icon name="x" size='small'/></Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    )
  }
  

export default MyReqs;