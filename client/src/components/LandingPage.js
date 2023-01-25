import { Button, Icon } from 'semantic-ui-react'
import { Link} from 'react-router-dom';



function LandingPage({handleLoginModal, setNewCompany}) {
    return(
        <div id="landing-page-container">
            <div id="landing-top">
                <div id="landing-header">
                    <h1>Req Board</h1>
                    <div id="landing-subheading">
                        <h2>Let's Get Organized</h2>
                        <h3>Where you & your talent acquisition team can manage headcount from a birds eye view.</h3>
                    </div>
                </div> 
                <div id='landing-right-content'>
                    {/* <div id="landing-thumbnail">
                        <p>images</p>
                    </div> */}
                </div> 
                
            </div>
            <div id="landing-bottom">
                <Link to="/signup" >
                    <Button onClick={() => {setNewCompany({name: ""})}} color='black' size='large'>Sign Up</Button>
                </Link>
                    <Button color='black' size='large' onClick={handleLoginModal}>Login</Button>
                <Link to="#" onClick={() => {window.location.href = "mailto:llindsayttaylor@gmail.com"}}>
                    <Icon name="mail" size='big'></Icon>
                </Link>
                    
            </div>  
        </div>
    )
}

export default LandingPage;