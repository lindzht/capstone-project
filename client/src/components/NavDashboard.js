import { Link, useNavigate } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import { useState } from "react";
import hamburger from "../images/hamburger.png";


function NavDashboard ({handleLogOut, currentUser}) {
    let navigate = useNavigate();

    const [displayNav, setDisplayNav] = useState(false);

    const handleHamburger = ()=> {
        setDisplayNav(!displayNav);
    }


    return(
        <>
        {!displayNav ? 
        
        
        <div id="hamburger-container">
                <div id="hamburger-content">
                    <Icon id="hamburger-icon" onClick={handleHamburger} size="big"  name="pencil" />
                    {/* <img src={hamburger} alt="hamburger" onClick={handleHamburger} style={{width: 35}}/> */}
                </div>
            </div>
        
        
        
        : <div id="nav-dashboard-container">
                <div id="nav-dashboard-content">
                    {/* <img src={hamburger} alt="hamburger" onClick={handleHamburger} style={{width: 35}}/> */}
                    <Icon onClick={handleHamburger} size="big" name="pencil" id="hamburger-icon" />
                    <h3 onClick={() => {navigate('/dashboard')}}> ✴ Logo </h3>
                    <nav>
                        <Link to="dashboard">My Dashboard</Link>
                        <Link to="dashboard/myreqs">My Reqs</Link>
                        <Link to="dashboard/myhires">My Hires</Link>
                        <Link to="settings">Settings</Link>
                        {/* <Icon name="edit outline" /> */}
                        <h4>{currentUser.admin ? currentUser.company.name : null} Admin</h4>
                        <Icon id="peaceout-icon" name="hand peace outline" size="large" />
                        <Link id="logout" onClick={handleLogOut} to="/">Logout</Link>
                    </nav>
                </div>
            </div>
        
        
        
        }
        
        </>
    )
}

export default NavDashboard;