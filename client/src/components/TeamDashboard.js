import React from 'react'
import TeamSubNav from "./TeamSubNav";
import { Icon, } from 'semantic-ui-react';
import { Link,  useParams } from 'react-router-dom';



function TeamDashboard ( {currentTeam, currentUser, setSelectTeamID} ){
    // const [currentTeam, setCurrentTeam] = useState({reqs: []})
    // const [currentTeam, setCurrentTeam] = useState(null)

    let params = useParams();
    setSelectTeamID(params.teamId)
    
    // useEffect(() => {
    //   fetch(`/teams/${teamID}`)
    //   .then(res => {
    //     if (res.ok){
    //       res.json()
    //       .then(data => {
    //         setCurrentTeam(data)
    //       })
    //     }
    //   })
    // }, [teamID])

//     console.log(currentUser.reqs)

//    function test(){
//        console.log(currentTeam.reqs)
//        return( currentTeam.reqs.map((req) => {
//         return(
//             <p id={req.id}>{req.name}</p>
//         )
//         }))
//    }

//    function renderOpenReqTable (){
//         return(<TeamReqs currentTeam={currentTeam}/>)
//    }


//    const sam = false 
//    sam ? 
//         let lindsay = ":)" 
//         : 
//         lindsay = ":("





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
                {currentTeam ? <h1>{currentTeam.name} 's Board</h1> : "Nope"}
            </div>
                <TeamSubNav />

        </div> 
    )
}

export default TeamDashboard;