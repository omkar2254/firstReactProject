// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="TextUtils" about="About"/>
    <div className="container">
      <TextForm heading="Enter the text to analyze"/>
    </div>
    <About/>
    
    </>
    
  );
}

export default App;
