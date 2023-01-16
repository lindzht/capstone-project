import MyDashboardNav from "./MySubNav";
// import MyReqs from "./MyReqsPage";
import { Icon } from 'semantic-ui-react';
import { Link, Outlet } from 'react-router-dom';


function DashboardCompany ( {currentUser} ){



    return(
        <div className="dashboard-container">
            <div id="user-display"><Link to="/settings"><Icon name="user circle"></Icon><p>{currentUser && currentUser.first_name}</p></Link></div>
            <div className="dashboard-header">
                <h1>My {currentUser.company.name} Dashboard</h1>
                <div className="dashboard-nav-container">
                    <MyDashboardNav />
                </div>
            </div>
            {/* <div className="dashboard-content-container">
                <div id="dashboard-content-left">
                    <div id="team-block">
                        <h3>My Teams</h3>
                        {currentUser.admin ? <Icon name="add circle" size="big" /> : null}
                        {teamCards}
                    </div>
                </div>  
                <div id="dashboard-content-right">
                    <div id="my-content-blocks">
                        <h3>My Goals</h3>
                        <h3>My Metrics</h3>
                    </div>
                </div>  
            </div> */}
        </div> 
    )
}

export default DashboardCompany;