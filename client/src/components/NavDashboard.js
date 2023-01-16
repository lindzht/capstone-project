import { Routes, Route, Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react'

function NavDashboard ({handleLogOut}) {
    return(
        <div id="nav-dashboard-container">
            <div id="nav-dashboard-content">
                <h3> ✴ Logo </h3>
                <nav>
                    <Link to="dashboard">My Dashboard</Link>
                    <Link to="goals">My Goals</Link>
                    <Link to="settings">Settings</Link>
                    <Icon name="edit outline" />
                    <Link id="logout" onClick={handleLogOut} to="/">Logout</Link>
                </nav>
            </div>
        </div>
    )
}

export default NavDashboard;