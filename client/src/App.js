import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useParams} from 'react-router-dom';
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
import TeamReqs from './components/TeamReqs';
import TeamDashboardHome from './components/TeamDashboardHome';
import TeamSettings from './components/TeamSettings';
import TeamAddReqsPage from './components/TeamAddReqsPage';

function App() {

  // STATE 
  
  const [currentUser, setCurrentUser] = useState(null)
  const [companies, setCompanies] = useState([])
  const [newCompany, setNewCompany] = useState({name: ""});
  const [newCompanyID, setNewCompanyID] = useState("")
  // const [newRecruiter, setNewRecruiter] = useState([])
  const [errors, setErrors] = useState([])
  const [displayLoginForm, setDisplayLoginForm] = useState(false);
  const [newTeam, setNewTeam] = useState({name: ""});
  const [selectTeamID, setSelectTeamID] = useState("")
  // const [teamData, setTeamData] = useState([])
  const [companyTeamData, setCompanyTeamData] = useState([]);
  const [currentTeam, setCurrentTeam] = useState(null)
  const [newData, setNewData] = useState([]);


  let params = useParams();


  //STAY LOGGED IN:
  useEffect(() => {
    fetch("/me")
    .then(res => {
      if(res.ok){
        res.json()
        .then(user => {
          setCurrentUser(user)
        })
      }
    });
  }, [newTeam]);

  // FETCH COMPANIES 
  useEffect(() => {
    fetch('/companies')
    .then(res => {
      if (res.ok){
        res.json()
        .then(data => {
          setCompanies(data)
        })
      }
    })
  }, [newCompany])

  // CREATE NEW COMPANY AND ADD NEW COMPANY ID
   const createNewCompany = (newCompany)=> {
    fetch('/companies', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newCompany)
    })
    .then(res => {
      if (res.ok){
        res.json().then(data => {
          setNewCompanyID(data.id);
        })
      } else {
        res.json().then(data => {setErrors(data.errors); console.log(errors)})
      }
    })
   }

    // CREATE NEW RECRUITER
    const createNewRecruiter = (newRecruiter)=> {
      fetch('/recruiters', {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newRecruiter)
      })
      .then(res => {
        if (res.ok){
          res.json().then(data => {
            console.log(data);
            setCurrentUser(data);
          })
        } else {
          res.json().then(data => {setErrors(data.errors); console.log(errors)})
        }
      })
    }

    // UPDATE RECRUITER
    const handleUpdateRecruiter = (updateRecruiterObj)=> {
      console.log(updateRecruiterObj);
      fetch(`/recruiters/${currentUser.id}`, {
        method: "PATCH",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(updateRecruiterObj)
      })
      .then(res => {
        if (res.ok){
          res.json().then(data => {
            console.log(data);
            setCurrentUser(data);
          })
        } else {
          res.json().then(console.log("no go"))
        }
      })
    }

     // LOGOUT
    const handleLogOut =()=> {
    fetch("/logout", {
    method: "DELETE"
    })
    .then(res => {
    if(res.ok) {
        setCurrentUser(null)
      }
     })
    }

    // DISPLAY LOGIN MODAL
    const handleLoginModal =()=> {
      setDisplayLoginForm(!displayLoginForm)
      console.log(displayLoginForm)
    }



    // CREATE NEW TEAM
    const createNewTeam = (newTeam)=> {
      console.log(newTeam);
      fetch('/teams', {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newTeam)
      })
      .then(res => {
        if (res.ok){
          res.json().then(data => {
            setNewTeam(data);
            console.log(data);
          })
        } else {
          res.json().then(data => {setErrors(data.errors); console.log(errors)})
        }
      })
     }


    //  FETCH TEAM DATA 
    useEffect(() => {
      fetch(`/teams/${selectTeamID}`)
      .then(res => {
        if (res.ok){
          res.json()
          .then(data => {
            setCurrentTeam(data)
          })
        }
      })
    }, [selectTeamID, newData])


    //  DELETE RECRUITER FROM TEAM
    const deleteRecruiterFromTeam =(recTeamID)=>{
      fetch(`/recruiterteams/${recTeamID}`, {
        method: "DELETE"
        })
        .then(res => {
        if(res.ok) {
            res.json()
            .then(data => {
              setNewData(data)
            })
          }
        })
    }
    
    // FETCH COMPANY DATA
    // useEffect(() => {
    //   fetch(`/companies/${id}`)
    //   .then(res => {
    //     if (res.ok){
    //       res.json()
    //       .then(data => {
    //         console.log(data)
    //       })
    //     }
    //   })
    // }, [])
    


  return (
    <BrowserRouter>
    {!currentUser ? 
      <div className="App">
          <NavTop 
              currentUser={currentUser} 
              handleLogOut={handleLogOut}
              handleLoginModal={handleLoginModal}
              />
        { displayLoginForm ?
          <LoginModal
              setCurrentUser={setCurrentUser}
              currentUser={currentUser}
              setErrors={setErrors}
              errors={errors}
              handleLoginModal={handleLoginModal}/>
        : null }
        <Routes>
          <Route index element={<LandingPage handleLoginModal={handleLoginModal}/>} />
          <Route path='signup' element={<SignupPage 
              companies={companies}
              createNewCompany={createNewCompany}
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
              <Route index element={<MyDashboard currentUser={currentUser}/>} />
                <Route path='dashboard' element={<MyDashboard currentUser={currentUser}/>} >
                  <Route index element={<MyDashboardHome 
                      currentUser={currentUser} 
                      newTeam={newTeam} 
                      setNewTeam={setNewTeam}
                      createNewTeam={createNewTeam}
                      setSelectTeamID={setSelectTeamID}
                      />} />
                  <Route path='myreqs'element={<MyReqsPage currentUser={currentUser} />} />
                  <Route path='myhires'element={<MyHiredReqs currentUser={currentUser} />} />
                </Route>
                <Route path='teams/:teamId' element={<TeamDashboard 
                      currentUser={currentUser}
                      setSelectTeamID={setSelectTeamID}
                      currentTeam={currentTeam}  />} >
                  <Route index element={<TeamDashboardHome 
                      currentUser={currentUser}
                      // setSelectTeamID={setSelectTeamID}
                      currentTeam={currentTeam} 
                      deleteRecruiterFromTeam={deleteRecruiterFromTeam}/>}/>
                  <Route path="reqs" element={<TeamReqs currentUser={currentUser} currentTeam={currentTeam} />} />
                  <Route path="settings" element={<TeamSettings currentUser={currentUser}  />} />
                  <Route path="add" element={<TeamAddReqsPage currentUser={currentUser}  />} />
                </Route>
                <Route path='settings'element={<Settings currentUser={currentUser} handleUpdateRecruiter={handleUpdateRecruiter}/>} />
            </Routes>
        </div>
      </>
    }
    </BrowserRouter>
  );
}

export default App;
