import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import SignupPage from './components/SignupPage';
import NavTop from './components/NavTop';
import LoginModal from './components/LoginModal';
import MyDashboard from './components/MyDashboard';
import MyReqsPage from './components/MyReqs';
import NavDashboard from './components/NavDashboard';
import MyDashboardHome from './components/MyDashboardHome';
import Settings from './components/Settings';
import MyHiredReqs from './components/MyHiredReqs';
import TeamDashboard from './components/TeamDashboard';
import TeamDashboardHome from './components/TeamDashboardHome';
import TeamMetrics from './components/TeamMetrics';
import TeamHiredReqs from './components/TeamHiredReqs';

function App() {

  // STATE 

  const [currentUser, setCurrentUser] = useState(null)
  const [companies, setCompanies] = useState([])
  const [newCompany, setNewCompany] = useState({ name: "" });
  const [newCompanyID, setNewCompanyID] = useState("")
  const [errors, setErrors] = useState([])
  const [displayLoginForm, setDisplayLoginForm] = useState(false);
  const [newTeam, setNewTeam] = useState({ name: "" });
  const [selectTeamID, setSelectTeamID] = useState("")
  // const [currentCompany, setCurrentCompany] = useState(null);
  const [currentTeam, setCurrentTeam] = useState(null)
  const [newData, setNewData] = useState([]);
  const [recruiterSearchID, setRecruiterSearchID] = useState(null)
  const [reqSearchID, setReqSearchID] = useState(null)
  const [updatedReq, setUpdatedReq] = useState(null)
  const [newTeamReq, setNewTeamReq] = useState({
    req_id: "",
    name: "",
    org: "",
    hiring_manager: "",
    open_date: "",
    hire_goal: "",
    hired_status: "",
    recruiter_id: ""
  })
  const [displayAddForm, setDisplayAddForm] = useState(false)
  const [displayEditIcon, setDisplayEditIcon] = useState(false)
  const [displayDeleteIcon, setDisplayDeleteIcon] = useState(false)
  const [newHire, setNewHire] = useState(false)


  //STAY LOGGED IN:
  useEffect(() => {
    fetch("/me")
      .then(res => {
        if (res.ok) {
          res.json()
            .then(user => {
              setCurrentUser(user)
            })
        }
      });
  }, [newTeam, newData]);
// }, [newTeam, newData]);


  // LOGIN 
  // const handleLogin = (currentUser) => {
  //   fetch('/login', {
  //     method: "POST",
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(currentUser)
  //   })
  //     .then(res => {
  //       if (res.ok) {
  //         res.json().then(data => {
  //           setCurrentUser(data);
  //           setNewData(data.first_name);
  //         })
  //       } else {
  //         res.json().then(data => { for (const key in data) { setErrors(data[key]); } })
  //       }
  //     })
  // }


  // FETCH COMPANIES 
  useEffect(() => {
    fetch('/companies')
      .then(res => {
        if (res.ok) {
          res.json()
            .then(data => {
              setCompanies(data)
            })
        }
      })
  }, [newCompany, newData])

  // CREATE NEW RECRUITER
  const createNewRecruiter = (newRecruiter) => {
    console.log(newRecruiter)
    fetch('/recruiters', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newRecruiter)
    })
      .then(res => {
        if (res.ok) {
          res.json().then(data => {
            console.log(data);
            setCurrentUser(data);
            setNewData(data);
            setNewCompany({ name: "" })
          })
        } else {
          res.json().then(data => { setErrors(data.errors) })
        }
      })
  }

  // UPDATE RECRUITER
  const handleUpdateRecruiter = (updateRecruiterObj) => {
    console.log(updateRecruiterObj);
    fetch(`/recruiters/${currentUser.id}`, {
      method: "PATCH",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updateRecruiterObj)
    })
      .then(res => {
        if (res.ok) {
          res.json().then(data => {
            console.log(data);
            setCurrentUser(data);
          })
        } else {
          res.json().then(data => { setErrors(data.errors) })
        }
      })
  }

  // LOGOUT
  const handleLogOut = () => {
    fetch("/logout", {
      method: "DELETE"
    })
      .then(res => {
        if (res.ok) {
          setCurrentUser(null)
        }
      })
  }

  // CREATE NEW TEAM
  const createNewTeam = (newTeam) => {
    console.log(newTeam);
    fetch('/teams', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTeam)
    })
      .then(res => {
        if (res.ok) {
          res.json().then(data => {
            setNewTeam(data);
            console.log(data);
          })
        } else {
          res.json().then(data => { setErrors(data.errors)})
        }
      })
  }

  //  FETCH TEAM DATA 
  useEffect(() => {
    fetch(`/teams/${selectTeamID}`)
      .then(res => {
        if (res.ok) {
          res.json()
            .then(data => {
              setCurrentTeam(data)
            })
        }
      })
  }, [selectTeamID, newData, newTeamReq, updatedReq])

  //DELETE TEAM
  const deleteTeam = (teamID) => {
    // console.log(reqID)
    fetch(`/teams/${teamID}`, {
      method: "DELETE"
    })
      .then(res => {
        if (res.ok) {
          res.json()
            .then(data => {
              setNewData(data);
            })
        }
      })
  }

  //  ADD RECRUITER TO TEAM
  const createRecruiterTeamRelationship = (recruiterSearchObj) => {
    console.log(recruiterSearchObj);
    fetch('/recruiterteams', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(recruiterSearchObj)
    })
      .then(res => {
        if (res.ok) {
          res.json().then(data => {
            // setNewTeam(data);
            console.log(data);
            setNewData(data)
          })
        } else {
          res.json().then(data => { setErrors(data.errors); console.log(errors) })
        }
      })
  }


  //  DELETE RECRUITER FROM TEAM (ACROSS ALL TEAMS + UNIQUE TEAM)
  const deleteRecruiterFromTeam = (recTeamID) => {
    fetch(`/recruiterteams/${recTeamID}`, {
      method: "DELETE"
    })
      .then(res => {
        if (res.ok) {
          res.json()
            .then(data => {
              setNewData(data)
            })
        }
      })
  }

  // ADD NEW REQ
  const addNewReq = (newReq) => {
    // console.log(newReq);
    fetch('/reqs', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newReq)
    })
      .then(res => {
        if (res.ok) {
          res.json().then(data => {
            setNewData(data);
            setErrors([])
            if(data.hired_status === "Hired"){
              setNewHire(data)
            }
          })
        } else {
          res.json().then(data => {for (const key in data){setErrors(data[key]);}; console.log(errors)})
        }
      })
  }

  //  DELETE REQ FROM ALL TEAMS (From the All Reqs board)
  const deleteReq = (reqID) => {
    fetch(`/reqs/${reqID}`, {
      method: "DELETE"
    })
      .then(res => {
        if (res.ok) {
          res.json()
            .then(data => {
              setNewData(data);
            })
        }
      })
  }

  //  DELETE REQ FROM SPECIFIC TEAM
  const deleteReqFromTeam = (reqObj) => {
    fetch('/reqteamdestroy', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reqObj)
    })
      .then(res => {
        if (res.ok) {
          res.json().then(data => {
            setNewData(data);
          })
        } else {
          res.json().then(data => { setErrors(data.errors); console.log(errors) })
        }
      })
  }

  // UPDATE REQ
  const updateReq = (updateReqObj) => {
    fetch(`/reqs/${updateReqObj.id}`, {
      method: "PATCH",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updateReqObj)
    })
      .then(res => {
        if (res.ok) {
          res.json().then(data => {
            setUpdatedReq(data);
          })
        } else {
          res.json().then(data => { setErrors(data.errors); console.log(errors) })
        }
      })
  }


  // DISPLAY LOGIN MODAL
  const handleLoginModal = () => {
    setDisplayLoginForm(!displayLoginForm)
    setErrors([])
  }

  //CRUD REQS
  function handleDisplayAddForm() {
    setDisplayAddForm(!displayAddForm);
  }
  function handleDisplayEditIcons() {
    setDisplayEditIcon(!displayEditIcon)
    setDisplayDeleteIcon(false)
  }
  function handleDisplayDeleteIcons() {
    setDisplayDeleteIcon(!displayDeleteIcon)
    setDisplayEditIcon(false)
  }


  return (
    <BrowserRouter>
      {!currentUser ?
        <div className="App">
          <NavTop
            currentUser={currentUser}
            handleLogOut={handleLogOut}
            handleLoginModal={handleLoginModal}
          />
          {displayLoginForm ?
            <LoginModal
              setCurrentUser={setCurrentUser}
              currentUser={currentUser}
              setErrors={setErrors}
              errors={errors}
              handleLoginModal={handleLoginModal}
              // handleLogin={handleLogin}
              setDisplayLoginForm={setDisplayLoginForm}
              setNewData={setNewData} />
            : null}
          <Routes>
            <Route index element={<LandingPage handleLoginModal={handleLoginModal} setNewCompany={setNewCompany} />} />
            <Route path='signup' element={<SignupPage
              companies={companies}
              createNewRecruiter={createNewRecruiter}
              newCompany={newCompany}
              setNewCompany={setNewCompany}
              newCompanyID={newCompanyID} />} />
          </Routes>
        </div>

        :

        <>
          <div className="App-loggedin">
            <NavDashboard
              currentUser={currentUser}
              handleLogOut={handleLogOut}
              handleLoginModal={handleLoginModal}
            />
            <Routes>
              <Route index element={<MyDashboard currentUser={currentUser} />} />
              <Route path='dashboard' element={<MyDashboard currentUser={currentUser} />} >
                <Route index element={<MyDashboardHome
                  currentUser={currentUser}
                  newTeam={newTeam}
                  setNewTeam={setNewTeam}
                  createNewTeam={createNewTeam}
                  setSelectTeamID={setSelectTeamID}
                  setNewData={setNewData}
                  deleteTeam={deleteTeam}
                />} />
                <Route path='myreqs' element={<MyReqsPage currentUser={currentUser} />} />
                <Route path='myhires' element={<MyHiredReqs currentUser={currentUser} />} />
              </Route>
              <Route path='teams/:teamId' element={<TeamDashboard
                currentUser={currentUser}
                setSelectTeamID={setSelectTeamID}
                currentTeam={currentTeam}
                newHire={newHire} />} >
                <Route index element={<TeamDashboardHome
                  errors={errors}
                  currentUser={currentUser}
                  currentTeam={currentTeam}
                  deleteRecruiterFromTeam={deleteRecruiterFromTeam}
                  companies={companies}
                  addNewReq={addNewReq}
                  setNewTeamReq={setNewTeamReq}
                  newTeamReq={newTeamReq}
                  setNewData={setNewData}
                  setReqSearchID={setReqSearchID}
                  reqSearchID={reqSearchID}
                  setRecruiterSearchID={setRecruiterSearchID}
                  recruiterSearchID={recruiterSearchID}
                  createRecTeamRelationship={createRecruiterTeamRelationship}
                  deleteReq={deleteReq}
                  deleteReqFromTeam={deleteReqFromTeam}
                  updateReq={updateReq}
                  handleDisplayAddForm={handleDisplayAddForm}
                  displayEditIcon={displayEditIcon}
                  displayDeleteIcon={displayDeleteIcon}
                  handleDisplayEditIcons={handleDisplayEditIcons}
                  handleDisplayDeleteIcons={handleDisplayDeleteIcons}
                  displayAddForm={displayAddForm}
                />} />
                <Route path="hires" element={<TeamHiredReqs
                  currentUser={currentUser}
                  currentTeam={currentTeam}
                  setSelectTeamID={setSelectTeamID}
                  handleDisplayAddForm={handleDisplayAddForm}
                  displayEditIcon={displayEditIcon}
                  displayDeleteIcon={displayDeleteIcon}
                  displayAddForm={displayAddForm}
                  companies={companies}
                  addNewReq={addNewReq}
                  setNewTeamReq={setNewTeamReq}
                  newTeamReq={newTeamReq}
                  setNewData={setNewData}
                  setReqSearchID={setReqSearchID}
                  reqSearchID={reqSearchID}
                  handleDisplayEditIcons={handleDisplayEditIcons}
                  handleDisplayDeleteIcons={handleDisplayDeleteIcons}
                  updateReq={updateReq}
                  deleteReq={deleteReq}
                  deleteReqFromTeam={deleteReqFromTeam}
                />} />
                <Route path="metrics" element={<TeamMetrics 
                  currentUser={currentUser}
                  setSelectTeamID={setSelectTeamID}
                  currentTeam={currentTeam} />} />
              </Route>
              <Route path='settings' element={<Settings currentUser={currentUser} handleUpdateRecruiter={handleUpdateRecruiter} />} />
            </Routes>
          </div>
        </>
      }
    </BrowserRouter>
  );
}

export default App;
