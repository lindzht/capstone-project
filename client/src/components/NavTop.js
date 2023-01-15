import { Icon } from "semantic-ui-react";
import { Link, useNavigate } from 'react-router-dom';
// import { useState } from "react";

function Nav ({currentUser, handleLogOut, handleLoginModal}){
    let navigate = useNavigate();

    const logoRedirect =() => {
        navigate('/')
    }

    return(
        <div id="top-nav-container">
            <div id="top-nav-content">
                <div id="top-nav-logo">
                    <h3 onClick={logoRedirect}> ✴ Logo </h3>
                </div>
                <div id="top-nav-links">
                    {currentUser ? 
                        <div id="top-nav-loggedin">
                            <Link to="/settings"><Icon name="user circle"></Icon><p>{currentUser && currentUser.first_name}</p></Link>
                            <Link onClick={handleLogOut} to="/">Logout</Link>
                        </div>
                    :   <div id="top-nav-loggedout">
                            <p onClick={handleLoginModal}> Login </p>
                        </div>
                    } 
                </div>
            </div>
        </div>
    )
}

export default Nav;