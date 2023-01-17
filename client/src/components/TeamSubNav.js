import { Link, Outlet } from 'react-router-dom';
import { Icon } from 'semantic-ui-react'

function TeamSubNav(){
    return(
        <div className="sub-nav-container">
           
            <nav>
                <Link to="/teams"><button className="dash-nav-button">Team Dashboard</button></Link>
                <Link to="hires"><button className="dash-nav-button">Hires</button></Link>
                <Link to="metrics"><button className="dash-nav-button">Metrics</button></Link>
                <Link to="teammates"><button className="dash-nav-button">Teammates</button></Link>
            </nav>
            
            <Outlet />
        </div>
    )
}

export default TeamSubNav;