import { Icon } from 'semantic-ui-react'
import {useState} from "react"
import { useNavigate} from "react-router-dom";

function LoginModal({errors, setErrors, handleLoginModal, setDisplayLoginForm, setCurrentUser}) {
    let navigate = useNavigate();

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

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     handleLogin(user)
    //     if (errors) {
    //         navigate('/dashboard')
    //         setDisplayLoginForm(false);
    //     }
    // };

    const handleLogin = (e) => {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    setCurrentUser(user);
                    setDisplayLoginForm(false);
                    navigate('/dashboard');
                    console.log("login working")
            }) 
            } else {
                console.log("login not working")
            }
        }) 
        // setUser({
        //     username: "",
        //     password: ""
        // })
        
    }





    return(
        <div id="login-page-container">
            <div id="login-popup"> 
                <Icon id="login-exit" name="x" size='large' onClick={handleLoginModal}/>
                <h1>Login</h1>
                <div id="login-form">
                    <form onSubmit={handleLogin}>
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
                        <input type="submit" value="Submit" />
                        {/* <Icon size="big" name='arrow circle right' className="icon-right-arrow" onClick={handleLogin}/> */}
                    </form>
                    {errors !== null ? <p>{errors}</p> : null}
                </div>
                
            </div>
        </div>
    )
}

export default LoginModal;