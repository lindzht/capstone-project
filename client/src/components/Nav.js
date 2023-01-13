import { Icon } from "semantic-ui-react";
import { useState } from "react";

function Nav (){

    const [expandNav, setExpandNav] = useState(false)

    const handleHamburger = ()=> {
        setExpandNav(!expandNav);
    }

if (!expandNav) return <Icon id="hamburger" name="star" size="big" onClick={handleHamburger}/>
    return(
        <div id="nav-container">
            <Icon id="hamburger" name="star" size="big" onClick={handleHamburger} />
            <div id="nav-content">
                <h3> This is a link </h3>
                <h3> This is a link </h3>
                <h3> This is a link </h3>
                <h3> This is a link link link link</h3>
            </div>
        </div>
    )
}

export default Nav;