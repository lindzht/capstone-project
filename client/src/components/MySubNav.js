import { Link, Outlet } from 'react-router-dom';

function MyDashboardNav(){
    return(
        <div className="sub-nav-container">
           

            <Link to="/dashboard">
                <button className="dash-nav-button">Home</button>
            </Link>
            <Link to="/dashboard/myreqs">
                <button className="dash-nav-button">My Reqs</button>
            </Link>
            <Link to="/dashboard/mygoals">
                <button className="dash-nav-button">My Goals</button>
            </Link>
            
            <Outlet />
        </div>
    )
}

export default MyDashboardNav;