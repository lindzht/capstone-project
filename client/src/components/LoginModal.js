
import landing_video from "../video/landing_video.mp4";
import { Icon } from 'semantic-ui-react'
import {useState} from "react"
import { useNavigate, Link, Navigate } from "react-router-dom";

function LoginModal({errors, handleLoginModal, handleLogin}) {
    let navigate = useNavigate();

    // LOGIN 
    // const handleLogin = (currentUser) => {
    //     fetch('/login', {
    //         method: "POST",
    //         headers: {'Content-Type': 'application/json'},
    //         body:JSON.stringify(currentUser)
    //     })
    //     .then(res => {
    //         if (res.ok){
    //         res.json().then(data => {
    //             setCurrentUser(data);
    //             navigate('/dashboard')
    //         })
    //         } else {
    //         res.json().then(data => {for (const key in data){setErrors(data[key]);}})
    //         }
    //     })
    // }

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
        if (errors) {
            navigate('/dashboard')
        }
    };


    return(
        <div id="login-page-container">
            <div id="login-popup"> 
                <Icon id="login-exit" name="x" size='large' onClick={handleLoginModal}/>
                <h1>Login</h1>
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
                        <Icon size="big" name='arrow circle right' className="icon-right-arrow" onClick={handleSubmit}/>
                    </form>
                    {/* {errors ? "error baby" : null} */}
                </div>
                
            </div>
        </div>
    )
}

export default LoginModal;