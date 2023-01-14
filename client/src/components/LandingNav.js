import { Icon } from "semantic-ui-react";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";

function Nav ({currentUser, handleLogOut, handleLoginModal}){
    let navigate = useNavigate();

    const logoRedirect =() => {
        navigate('/')
    }

    return(
        <div id="landing-nav-container">
            <div id="landing-nav-content">
                <div id="landing-nav-logo">
                    <h3 onClick={logoRedirect}> ✴ Logo </h3>
                </div>
                <div id="landing-nav-links">
                    {currentUser ? 
                    <Link onClick={handleLogOut} to="/">
                        Logout
                    </Link>
                    : <p onClick={handleLoginModal}> Login </p>} 
                </div>
            </div>
        </div>
    )
}

export default Nav;