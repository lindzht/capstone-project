import landing_video from "../video/landing_video.mp4";


function LandingPage() {
    return(
        <div id="landing-page-container">
            <h1>Landing page</h1>


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

export default LandingPage;