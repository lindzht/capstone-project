import MySubNav from "./MySubNav";
// import MyReqs from "./MyReqsPage";
import { Icon } from 'semantic-ui-react';
import { Link, Outlet } from 'react-router-dom';


function MyDashboard ( {currentUser} ){



    return(
        <div className="dashboard-container">
            <div id="user-display">
                <Link to="/settings">
                    <Icon name="user circle"></Icon><p>{currentUser && currentUser.first_name} <span>{currentUser.admin? `(Admin)` : null}</span></p>
                </Link>
            </div>
            <div className="dashboard-header">
                <h1>{currentUser.first_name} 's Board</h1>
            </div>
            <MySubNav />
        </div> 
    )
}

export default MyDashboard;