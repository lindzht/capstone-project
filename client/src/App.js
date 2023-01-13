import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SignupPage from './components/SignupPage';
import Nav from './components/Nav';
import './App.css';

function App() {

  // STATE 
  
  const [companies, setCompanies] = useState([])


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
  }, [])


  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path='signup' element={<SignupPage 
              companies={companies}
              />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
