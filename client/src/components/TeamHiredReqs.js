import _ from 'lodash'
import React from 'react'
import { Table, Icon } from 'semantic-ui-react'
import TeamReqRow from './TeamReqRow'
import { useParams } from 'react-router-dom';
import Loading from './Loading';
import TeamAddReq from './TeamAddReq';


function TeamHiredReqs({ currentTeam, deleteReq, deleteReqFromTeam, displayDeleteIcon, displayEditIcon, updateReq, setSelectTeamID, handleDisplayAddForm, displayAddForm, companies, addNewReq, newTeamReq, setNewData, setNewTeamReq, setReqSearchID, reqSearchID, handleDisplayEditIcons, handleDisplayDeleteIcons }) {
    
    let params = useParams();
    setSelectTeamID(params.teamId)

    function RenderTable() {
        const tableData = currentTeam.reqs.filter((req) => {
            return req.hired_status === "Hired"
        })

        // function exampleReducer(state, action) {
        //     switch (action.type) {
        //         case 'CHANGE_SORT':
        //             if (state.column === action.column) {
        //                 return {
        //                     ...state,
        //                     data: state.data.slice().reverse(),
        //                     direction:
        //                         state.direction === 'ascending' ? 'descending' : 'ascending',
        //                 }
        //             }
        //             return {
        //                 column: action.column,
        //                 data: _.sortBy(state.data, [action.column]),
        //                 direction: 'ascending',
        //             }
        //         default:
        //             throw new Error()
        //     }
        // }

        // const [state, dispatch] = React.useReducer(exampleReducer, {
        //     column: null,
        //     data: tableData,
        //     direction: null,
        // })
        // const { column, data, direction } = state

        const renderRows = data.map((eachReq) => {
            return (<TeamReqRow {...eachReq} key={eachReq.id} deleteReq={deleteReq} deleteReqFromTeam={deleteReqFromTeam} displayDeleteIcon={displayDeleteIcon} displayEditIcon={displayEditIcon} currentTeam={currentTeam} updateReq={updateReq} handleDisplayAddForm={handleDisplayAddForm}/>)
        })

        return (
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
                                // onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'hiring_manager' })}
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
                                Hired Status
                            </Table.HeaderCell>
                            <Table.HeaderCell
                                // sorted={column === 'hired_date' ? direction : null}
                                // onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'open_date' })}
                            >
                                Hired Date
                            </Table.HeaderCell>
                            <Table.HeaderCell
                                // sorted={column === 'candidate' ? direction : null}
                                // onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'hire_goal' })}
                            >
                                Candidate Hired
                            </Table.HeaderCell>
                            <Table.HeaderCell
                                // sorted={column === 'candidate_app' ? direction : null}
                                // onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'hired_status' })}
                            >
                                Application Date
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
        {displayAddForm ?
                    <>
                        <TeamAddReq
                            companies={companies}
                            currentTeam={currentTeam}
                            addNewReq={addNewReq}
                            setNewTeamReq={setNewTeamReq}
                            newTeamReq={newTeamReq}
                            setNewData={setNewData}
                            setReqSearchID={setReqSearchID}
                            reqSearchID={reqSearchID}
                            handleDisplayAddForm={handleDisplayAddForm} />
                    </>
                    : null}
            {currentTeam && currentTeam.id == params.teamId ?
                <div className='req-container'>
                    <div id="req-top-container">
                        <h1>Hired Reqs</h1>
                        <div id="icons">
                            <Icon id="add" name="add circle" onClick={handleDisplayAddForm} />
                            <Icon id="edit" name="pencil" onClick={handleDisplayEditIcons} />
                            <Icon id="delete" name="trash alternate outline" onClick={handleDisplayDeleteIcons} />
                        </div>
                    </div>
                    <RenderTable />
                </div>
                :
                <Loading />
            }
        </>
    )
}


export default TeamHiredReqs;