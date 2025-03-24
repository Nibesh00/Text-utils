import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
     <div className="d-flex align-items-center">
       <a className="navbar-brand " href="#">{props.Title}</a>
       <ul className=" list-inline mt-3">
                        <li className="list-inline-item mx-3">
                            <a className="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        {/* <li className="list-inline-item mx-3">
                            <a className="nav-link" href="/About">About</a>
                        </li> */}
                    </ul>
            </div>
            
        <div className= {`form-check form-switch text-${props.mode=== 'light'? 'dark':'light'}`}> 
           
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
  </div>
    
      
  </nav>
  )
}
