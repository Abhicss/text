import React,{useState} from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  let color1=()=>{
    document.body.style.backgroundColor='red';
  }
  return (
    <div>
         <> 
        
    {/* //this <> </> called the jsx fragment */}
   <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/navbar">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.about}</Link>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className="pallete">
        <div className="cyan" onClick={'color1'}></div>
        <div className="green" onClick={'color2'}></div>
        <div className="gold" onClick={'color3'}></div>
      </div>
      <div className="form-check form-switch">
  <input className='form-check-input' onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Enable {props.mode==='dark'?'light':'dark'} Mode</label>
</div>
    </div>
  </div>
</nav>

    </>
   
    </div>
  )
}
Navbar.propTypes = {
    title: PropTypes.string
  };
Navbar.defaultProps={
    title:"home",
    about:"enter info"
}