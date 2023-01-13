import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SignupPage from './components/SignupPage';
import Nav from './components/Nav';
import LoginPage from './components/LoginPage';
import './App.css';

function App() {

  // STATE 
  
  const [companies, setCompanies] = useState([])
  const [newCompany, setNewCompany] = useState([])
  const [newCompanyID, setNewCompanyID] = useState([])
  const [newRecruiter, setNewRecruiter] = useState([])
  const [errors, setErrors] = useState([])


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
          setNewCompany(data);
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
        })
      } else {
        res.json().then(data => {setErrors(data.errors); console.log(errors)})
      }
    })
    }



  return (
    <BrowserRouter>
      <div className="App">
        {/* <Nav /> */}
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path='signup' element={<SignupPage 
              companies={companies}
              createNewCompany={createNewCompany}
              createNewRecruiter={createNewRecruiter}
              newCompany={newCompany}
              />} />
          <Route path='login' element={<LoginPage />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
