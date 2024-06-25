// src/App.js
import React from 'react';
import ContactUs from './components/ContactUs';
// import LandingPageFooter from './components/LandingPageFooter';
// import LoginForm from './components/Login';
// import RegistrationForm from './components/RegistrationPage';
import LandingPage from './components/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      {/* <LoginForm /> */}
    {/* <RegistrationForm/> */}

    {/* <LandingPageFooter/> */}
    {/* <ContactUs/> */}
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
