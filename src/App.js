// import logo from './logo.svg';
import React, { useState } from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';




function App() {

  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not
  // const[alert, setAlert] = useState(null);

  // const showAlert = (message, type)=>{
  //   setAlert({
  //     msg: message,
  //     type: type
  //   })
  // }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "#052c65"
      // showAlert("Dark mode has been enabled", "sucess");
    } else {
      setMode('light')
      document.body.style.backgroundColor = "white"
      // showAlert("Light mode has been enabled", "sucess");
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
