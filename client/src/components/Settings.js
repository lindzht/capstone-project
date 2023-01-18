import { Button, Icon } from 'semantic-ui-react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Settings ({currentUser, handleUpdateRecruiter }){

    const [displayEditForm, setDisplayEditForm] = useState(false)
    const [updateRecruiter, setUpdateRecruiter] = useState({
        first_name: currentUser.first_name,
        last_name: currentUser.last_name,
        email: currentUser.email,
        password: "",
        password_confirmation: ""
    });
    
    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setUpdateRecruiter({
            ...updateRecruiter,
            [key]: value
        })
    }

    const handleRecruiterSubmit = (e) => {
        e.preventDefault();
        handleUpdateRecruiter(updateRecruiter);
        handleEditForm();
        setUpdateRecruiter({
            first_name: updateRecruiter.first_name,
            last_name: updateRecruiter.last_name,
            email: updateRecruiter.email,
            password: "",
            password_confirmation: ""
        })
    };

    const handleEditForm =()=>{
        setDisplayEditForm(!displayEditForm)
    }
    

    return(
        <div className="dashboard-container">
            <div id="user-display">
                <Link to="/dashboard">
                    <Icon id="icon-home" name="home"></Icon>
                </Link>
                <Link to="/settings">
                    <Icon name="user circle"></Icon><p>{currentUser && currentUser.first_name} <span>{currentUser.admin? `(Admin)` : null}</span></p>
                </Link>
            </div>
            <div id="settings-card">
                <div id="settings-left-content">
                    <h1>Hello<br /><span>{currentUser.first_name}</span></h1>
                    <h3>{currentUser.admin ? `${currentUser.company.name} Admin`: null}</h3>
                </div>
                <div id="settings-right-content">
                   {  !displayEditForm?
                          <>
                            <p><span className="title">First Name:</span> <br /> {currentUser.first_name}</p>
                            <p><span className="title">Last Name:</span> <br />{currentUser.last_name}</p>
                            <p><span className="title">Email:</span> <br />{currentUser.email}</p>
                            <p><span className="title">Company:</span> <br />{currentUser.company.name}</p>
                            {currentUser.admin ? <p><span className="title">Admin Account</span></p> : null}
                            <Button onClick={handleEditForm} color='black'>Edit</Button>
                        </>
                        :
                        <div id="form-edit-recruiter-container">
                            <div className="exit">
                                <Link to="/settings" >
                                    <Icon className="exit-icon" name="x" size='large' onClick={()=> {setDisplayEditForm(!displayEditForm)}} />
                                </Link>
                            </div>
                            <form onSubmit={handleRecruiterSubmit}>
                                <input
                                    type="text"
                                    name="first_name"
                                    placeholder="First Name"
                                    value={updateRecruiter.first_name} 
                                    onChange={handleChange} />
                                <input
                                    type="text"
                                    name="last_name"
                                    placeholder="Last Name"
                                    value={updateRecruiter.last_name} 
                                    onChange={handleChange}/>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Email Address"
                                    value={updateRecruiter.email} 
                                    onChange={handleChange}/>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={updateRecruiter.password}
                                    onChange={handleChange} />
                                <input
                                    type="password"
                                    name="password_confirmation"
                                    placeholder="Password Confirmation"
                                    value={updateRecruiter.password_confirmation}
                                    onChange={handleChange} />
                                <Link to="/settings" >
                                    <Button color='black' onClick={(e) => {handleRecruiterSubmit(e)}}>Submit</Button>
                                </Link>
                            </form>
                        </div>
                        }
                </div>
            </div>

        </div>
    )
}

export default Settings;