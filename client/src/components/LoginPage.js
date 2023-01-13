
import landing_video from "../video/landing_video.mp4";
import { Icon } from 'semantic-ui-react'
import {useState} from "react"

function LoginPage({handleLogin}) {

    const [user, setUser] = useState({
        email: "",
        password: "",
        password_confirmation: "",
      })
   

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setUser({
            ...user,
            [key]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(user)
    };


    return(
        <div id="login-page-container">
            <div id="login-popup">
                <h1>Login Page</h1>

                <div id="login-form">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="email"
                            placeholder="Your Email"
                            value={user.email}
                            onChange={handleChange} />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={user.password}
                            onChange={handleChange} />
                        <input
                            type="password"
                            name="password_confirmation"
                            placeholder="Password Confirmation"
                            value={user.password_confirmation}
                            onChange={handleChange} />
                        <Icon name='right arrow' className="icon-right-arrow" onClick={handleSubmit}/>
                    </form>

                </div>
            </div>


            {/* <div id="video-overlay">
                <video id="video-background" autoPlay loop muted>
                    <source src={landing_video} type="video/mp4" />
                </video>
                <video id="video-background2" autoPlay loop muted>
                    <source src={landing_video} type="video/mp4" />
                </video>
            </div> */}
        </div>
    )
}

export default LoginPage;