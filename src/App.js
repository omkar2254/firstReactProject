import React, { useState } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom'  

import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Main from './components/Main';
import About from './components/About';

function App() {

  const[mode, setMode] = useState('light'); //Whether dark mode is enabled or not
  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = "#052c65"
    }else{
      setMode('light')
      document.body.style.backgroundColor = "white"
    }
    
  }

  return (
    <BrowserRouter>
      <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode}/> 
      <Routes>

      <Route path= '/' element={<Main mode={mode} />} />
      <Route path='/about' element={<About/>} /> 
      </Routes>

    </BrowserRouter>
    
  );
}

export default App;
