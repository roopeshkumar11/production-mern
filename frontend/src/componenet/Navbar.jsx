import React from 'react'

import { Link } from 'react-router-dom'
import "../style/Navbar.css"

function Navbar({children}) {
  return (
    
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary  ">
  <div className="container-fluid">
  <Link className="nav-link head" to="/"><b>JUSTTHOUGHT</b></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  " id="navbarNavAltMarkup">
      <div className="navbar-nav ">
        
      <li className="nav-item">
      <Link className="nav-link" to="/">Home</Link>
        </li>
    
        <li className="nav-item">
      <Link className="nav-link" to="/create">Create Post</Link>
        </li>
        <li className="nav-item">
      <Link className="nav-link" to="/show ">See post</Link>
        </li>
     
        
      </div>
    </div>
  </div>
</nav>{children}</>
  )
}

export default Navbar