import { Link, Outlet, useParams, useNavigate } from 'react-router-dom';


function TeamSubNav(){
    let params = useParams();
    let navigate = useNavigate();

    return(
        <div className="sub-nav-container">
           
            <nav>
                <button className="dash-nav-button" onClick={()=>{navigate(`/teams/${params.teamId}`)}}>Team Dashboard</button>
                {/* <Link to="reqs"><button className="dash-nav-button">Reqs</button></Link> */}
                {/* <Link to="add"><button className="dash-nav-button">Add</button></Link>*/}
                <Link to="hires"><button className="dash-nav-button">Hires</button></Link> 
                <Link to="metrics"><button className="dash-nav-button">Metrics</button></Link>
                {/* <Link to="settings"><button className="dash-nav-button">Team Settings</button></Link> */}
            </nav>
            
            <Outlet />
        </div>
    )
}

export default TeamSubNav;