import { Link, useNavigate } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import { useState } from "react";

function NavDashboard ({handleLogOut, currentUser}) {
    let navigate = useNavigate();

    const [displayNav, setDisplayNav] = useState(false);

    const handleHamburger = ()=> {
        setDisplayNav(!displayNav);
    }


    return(
        <div id="nav-dashboard-container">
            <div id="nav-dashboard-content">
                <h3 onClick={() => {navigate('/dashboard')}}> ✴ Logo </h3>
                <nav>
                    <Link to="dashboard">My Dashboard</Link>
                    <Link to="dashboard/myreqs">My Reqs</Link>
                    <Link to="dashboard/myhires">My Hires</Link>
                    <Link to="settings">Settings</Link>
                    {/* <Icon name="edit outline" /> */}
                    <h4>{currentUser.admin ? currentUser.company.name : null} Admin</h4>
                    <Icon name="hand peace outline" />
                    <Link id="logout" onClick={handleLogOut} to="/">Logout</Link>
                </nav>
            </div>
        </div>
    )
}

export default NavDashboard;