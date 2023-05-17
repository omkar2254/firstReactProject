// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


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
    <>
    <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert="This is alert"/>
    <div className="container my-3">
    <TextForm heading="Enter the text to analyze" mode={mode}/>
    </div>
    {/* <About/> */}
    </>
    
  );
}

export default App;
