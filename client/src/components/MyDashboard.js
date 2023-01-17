import MyDashboardNav from "./MySubNav";
// import MyReqs from "./MyReqsPage";
import { Icon } from 'semantic-ui-react';
import { Link, Outlet } from 'react-router-dom';


function DashboardCompany ( {currentUser} ){



    return(
        <div className="dashboard-container">
            <div id="user-display"><Link to="/settings"><Icon name="user circle"></Icon><p>{currentUser && currentUser.first_name} {currentUser.admin? "(Admin)" : null}</p></Link></div>
            <div className="dashboard-header">
                <h1>{currentUser.first_name} 's Board</h1>
                <div className="dashboard-nav-container">
                    <MyDashboardNav />
                </div>
            </div>
        </div> 
    )
}

export default DashboardCompany;