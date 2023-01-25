import { Icon } from "semantic-ui-react";
import { Link, useNavigate } from 'react-router-dom';
import hand from "../images/hand.png";

function Nav ({currentUser, handleLogOut, handleLoginModal}){
    let navigate = useNavigate();

    const logoRedirect =() => {
        navigate('/')
    }

    return(
        <div id="top-nav-container">
            {!currentUser ? 
                <div id="top-nav-content">
                    <div id="logo">
                        <h3 onClick={logoRedirect}>✴ RB ✴</h3>
                    </div>
                    <div id="top-nav-links">
                        <div id="top-nav-loggedout">
                            <img onClick={handleLoginModal} src={hand} alt="Login" />
                        </div>
                    </div>
                </div>    
            : <div id="top-nav-content-loggedin">
                        <div id="top-user"><Link to="/settings"><Icon name="user circle"></Icon><p>{currentUser && currentUser.first_name}</p></Link></div>
                        <Link onClick={handleLogOut} to="/">Logout</Link>
               </div>
            }
            
        </div>
    )
}

export default Nav;

