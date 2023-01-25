import hand from "../images/hand.png";

function NoGo (){
    return(
        <div id="no-go">
            <h1>Loading...</h1>
            <div id="top-nav-loggedout">
                <img src={hand} alt="Login" />
            </div>
        </div>
    )
}

export default NoGo;