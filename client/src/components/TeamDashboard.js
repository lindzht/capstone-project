import MySubNav from "./MySubNav";
// import MyReqs from "./MyReqsPage";
import { Icon } from 'semantic-ui-react';
import { Link, Outlet } from 'react-router-dom';


function TeamDashboard ( {currentUser} ){



    return(
        <div className="dashboard-container">
            <div id="user-display"><Link to="/settings"><Icon name="user circle"></Icon><p>{currentUser && currentUser.first_name}</p></Link></div>
            <div className="dashboard-header">
                <h3>test</h3>
                <h1>{currentUser.first_name} 's Board</h1>
                <div className="dashboard-nav-container">
                    <MySubNav />
                </div>
                {/* <Outlet /> */}
            </div>
        </div> 
    )
}

export default TeamDashboard;