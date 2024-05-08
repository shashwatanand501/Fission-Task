import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Screen/AuthScreen/Login/Login';
import Signup from './Screen/AuthScreen/Signup/Signup';
import Dashboard from './Screen/Dashboard/Dashboard';
import BioForm from './Screen/Form/BioForm/BioForm';
import MathForm from './Screen/Form/MathForm/MathForm';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/Signup" element={<Signup />} />
        {isLoggedIn ? (
          <>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/maths" element={<MathForm />} />
            <Route path="/bio" element={<BioForm />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/" />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
