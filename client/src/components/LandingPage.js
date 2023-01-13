import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';



function LandingPage() {
    return(
        <div id="landing-page-container">
            <div id="landing-top">
                <div id="landing-header">
                    <h1>Req Board</h1>
                    <div id="landing-subheading">
                        <h2>Let's Get Organized</h2>
                        <h3>Welcome to the space where you & your talent acquisition team can performance manage from a birds eye view.</h3>
                    </div>
                </div> 
                <div id='landing-right-content'>
                    <div id="landing-thumbnail">
                        <p>images</p>
                    </div>
                </div> 
                
            </div>
            <div id="landing-bottom">
                <Link to="/signup" >
                    <Button color='black' size='large'>Sign Up</Button>
                </Link>
                <div id="contact">Contact Icons</div>
            </div>  
        </div>
    )
}

export default LandingPage;