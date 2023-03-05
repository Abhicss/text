import logo from "./logo.svg";
import "./App.css";

// import statement is used to import css files
// import TextForm from './component/TextForm.js';
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
import About from "./components/About.js";
import { useState } from "react";
import Alert from "./components/Alert.js";
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const[mode,setMode]=useState('dark');//whether dark mode is enable or not

  // function for toggle mode
const toggleMode=()=>{
  if(mode==='dark'){
  setMode('light');
  document.body.style.backgroundColor='white';
  showAlert("light mode has been enabled",'');
  document.title='TextUtil - Light Mode';

  // We can use to blimp our text
  // setInterval(() => {
  //   document.title="download text utils now"
  // }, 1000);
  // setInterval(() => {
  //   document.title="textutils in amazing Mode"
  // }, 2000);
}else{
  setMode('dark');
  document.body.style.backgroundColor='grey';
  showAlert("dark mode has been enabled",'');
  document.title='TextUtil - Dark Mode';
}
}


// State for alert
// we give alert as a object
const [alert,setAlert]=useState();

const showAlert=(message,type)=>{
setAlert({
  msg:message,
  type:type
});
setTimeout(() => {
  setAlert();
}, 2000);

}

  return (
    <Router>
   <Navbar title="TextUtility" mode={mode}  about="About us"  toggleMode={toggleMode}/>
     <div className={`container-fluid text-dark`} mode={mode} style={{backgroundColor:mode==='dark'?'grey':'white'}}>
     
       
     <Routes>
   {/* exact path is used to access the page only and only the path is exactly same as the given path */}
      <Route exact path="/about" element={<About/>}/>
      {/* we can pass js file which contain our html code in element or we can also pass our code in element */}
      <Route path="/" element={<Alert/>}/>
      {/* <Route path="/"  */}
      
      <Route path="/navbar" element={<TextForm heading="Enter The Text To Analyze" showAlert={showAlert} mode={mode}  title="Welcome to the Text Utilities"/>}></Route>

{/* </Route> */}
</Routes>
</div>

{/* <Alert alert={alert}/> */}

            {/* we can move textform inside in to the router */}
          {/* <Route path="/" element={<About/>}/> */}
     
          
      

{/* for passing the methods in react we need to use their name and then also rewrite the method name in the curly braces */}
  {/* <About/> */}
  </Router>
  );
}

export default App;
