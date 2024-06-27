import React from 'react'

import { Link } from 'react-router-dom'
import "../style/Navbar.css"
import { useAuth } from '../context/contextapi'
import Logout from './Logout'

function Navbar({children}) {
  const [authuser,setauthuser]=useAuth()
  
  return (
    
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary p-3 ">
  <div className="container-fluid">
  <Link className="nav-link head" to="/"><b>JUSTTHOUGHT</b></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  " id="navbarNavAltMarkup">
      <div className="navbar-nav nav-contain ">
        
      <li className="nav-item ">
      <Link className="nav-link" to="/">Home</Link>
        </li>
    
        <li className="nav-item">
      <Link className="nav-link" to="/create">Create Post</Link>
        </li>
        <li className="nav-item">
      <Link className="nav-link" to="/show ">See post</Link>
        </li>
        <li className="nav-item float-end">
     {authuser?<Logout/>:<Link className="nav-link" to="/login "><button className='btn btn-warning '>Login</button></Link>}
        </li>
     
        
      </div>
    </div>
  </div>
</nav>{children}</>
  )
}

export default Navbar