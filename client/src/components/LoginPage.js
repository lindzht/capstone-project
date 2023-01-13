import landing_video from "../video/landing_video.mp4";

function LoginPage() {

    return(
        <div id="login-page-container">
            <h1>Login Page</h1>


            <div id="video-overlay">
                <video id="video-background" autoPlay loop muted>
                    <source src={landing_video} type="video/mp4" />
                </video>
                <video id="video-background2" autoPlay loop muted>
                    <source src={landing_video} type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

export default LoginPage;