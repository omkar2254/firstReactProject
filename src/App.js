// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
// import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {

  const[mode, setMode] = useState('light'); //Whether dark mode is enabled or not
  // const[alert, setAlert] = useState(null);

  // const showAlert = (message, type)=>{
  //   setAlert({
  //     msg: message,
  //     type: type
  //   })
  // }

  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = "#052c65"
      // showAlert("Dark mode has been enabled", "sucess");
    }else{
      setMode('light')
      document.body.style.backgroundColor = "white"
      // showAlert("Light mode has been enabled", "sucess");
    }
    
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode}/>
    {/* <Alert alert={alert}/> */}
    <div className="container my-3">
    <Switch>
          <Route path="/about">
            <About />
          </Route>
         
          <Route path="/">
          <TextForm heading="Enter the text to analyze" mode={mode}/>
          </Route>
    </Switch>
    
    
    
    </div>
    </Router>
    {/* <About/> */}
    </>
    
  );
}

export default App;
