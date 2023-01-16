import { Routes, Route, Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react'

function NavDashboard ({handleLogOut, currentUser}) {
    return(
        <div id="nav-dashboard-container">
            <div id="nav-dashboard-content">
                <h3> ✴ Logo </h3>
                <nav>
                    <Link to="dashboard">My Dashboard</Link>
                    <Link to="dashboard/mygoals">My Goals</Link>
                    <Link to="dashboard/myreqs">My Reqs</Link>
                    <Link to="settings">Settings</Link>
                    <Icon name="edit outline" />
                    <h4>{currentUser.admin ? currentUser.company.name : null} Admin</h4>
                    <Link id="logout" onClick={handleLogOut} to="/">Logout</Link>
                </nav>
            </div>
        </div>
    )
}

export default NavDashboard;