// values which are use in this app 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login-form';
import SignUp from './components/SignUp';
import React, { useState } from 'react';
import './App.css';

// Dark Mode fucntion 
function App() {
  const [Mode, setMode] = useState('light');
  const themeMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#808080';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#fff';
    }
  };
  return (
    <>
      <Router>
        <Header title="ProGame.com" aboutText="About Us" mode={Mode} themeMode={themeMode} />
        <Footer />
        <Routes>
          <Route exact path="/" element={<Home mode={Mode} />} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/login" element={<Login mode={Mode}/>} />
          <Route exact path="/signup" element={<SignUp mode={Mode}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
