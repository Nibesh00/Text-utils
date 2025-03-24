//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import  Textform  from  './Components/Textform';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Routes,
//   Route
// } from "react-router-dom";



function App() {
const [mode, setMode] = useState('light');
const [alert, setAlert] = useState(null);

const showAlert =( message, type) =>{
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(()=>{
    setAlert(null);
  },1500 )
}
const toggleMode=() =>{
  if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor = 'grey'
    showAlert("Dark mode is enabled", "success");
    document.title = 'TextUtils - Dark Mode';
}
else{
  setMode('light')
     document.body.style.backgroundColor = 'white'
     showAlert("Light mode is enabled", "success");
     document.title = 'TextUtils - Light Mode';
}
}

  return (
    <>
    {/* <Router> */}
     
<Navbar Title ="Text-utils" mode= {mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
  <div className="container my-3">
  {/* <Routes> */}
    {/* /users --> Component 1
        /users/home --> Component 2 */}
          {/* <Route exact path="/about" element={<About mode={mode} />} /> */}
{/* <Route exact path="/" element={} /> */}
<Textform showAlert={showAlert} heading="Text-Utils" mode={mode} />

    {/* </Routes> */}
  </div>
  {/* </Router> */}
</>
  );
}

export default App;
