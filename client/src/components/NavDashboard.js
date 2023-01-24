import { Link, useNavigate } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import { useState } from "react";


function NavDashboard ({handleLogOut, currentUser}) {
    let navigate = useNavigate();

    const [displayNav, setDisplayNav] = useState(false);
    const [displayTeams, setDisplayTeams] = useState(false);
    const [displayMine, setDisplayMine] = useState(false);

    const handleHamburger = ()=> {
        setDisplayNav(!displayNav);
    }

    const renderTeams = currentUser.teams.map((team) => {
        return(
            <Link to={`teams/${team.id}`}>- {team.name}</Link>
        )
    })

    return(
        <>
        {!displayNav ? 
        
        
        <div id="hamburger-container">
                <div id="hamburger-content">
                    <Icon id="hamburger-icon" onClick={handleHamburger} size="big"  name="pencil" />
                </div>
            </div>
        
        
        
        : <div id="nav-dashboard-container">
                <div id="nav-dashboard-content">
                    <Icon onClick={handleHamburger} size="big" name="pencil" id="hamburger-icon" />
                    <h3 onClick={() => {navigate('/dashboard')}}> ✴ Logo </h3>
                    <nav>
                        <p id="nav-teams" onClick={()=> {setDisplayMine(!displayMine)}}>+ My Board</p>
                        {displayMine ? 
                            <>  
                            <Link to="dashboard">- Dashboard</Link>
                            <Link to="dashboard/myreqs">- My Open Reqs</Link>
                            <Link to="dashboard/myhires">- My Hires</Link>
                            </>
                        : null }
                        <p id="nav-teams" onClick={()=> {setDisplayTeams(!displayTeams)}}>+ My Team Boards</p>
                        {displayTeams? renderTeams : null}
                        <Link to="settings">Settings</Link>
                        <br />
                        <br />
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