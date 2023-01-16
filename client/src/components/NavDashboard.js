import { Routes, Route, Link } from 'react-router-dom';

function NavDashboard () {
    return(
        <div id="nav-dashboard-container">
            <div id="nav-dashboard-content">
                <h3> ✴ Logo </h3>
                <nav>
                    <Link to="dashboard">My Dashboard</Link>
                    <Link to="goals">My Goals</Link>
                    <Link to="settings">Settings</Link>
                </nav>
            </div>
        </div>
    )
}

export default NavDashboard;