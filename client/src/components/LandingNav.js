import { Icon } from "semantic-ui-react";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";

function Nav (){
    let navigate = useNavigate();

    const logoRedirect =() => {
        navigate('/')
    }

    // const [expandNav, setExpandNav] = useState(false)
    // const handleHamburger = ()=> {
    //     setExpandNav(!expandNav);
    // }

// if (!expandNav) return <Icon id="hamburger" name="star" size="big" onClick={handleHamburger}/>
    return(
        <div id="landing-nav-container">
            <div id="landing-nav-content">
                <div id="landing-nav-logo">
                    <h3 onClick={logoRedirect}>✴ Logo </h3>
                    {/* <Icon id="landing-hamburger" name="star" size="big" /> */}
                </div>
                <div id="landing-nav-links">
                    <Link to="/signup">
                        Signup
                    </Link>
                    <Link to="/login">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Nav;