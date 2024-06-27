import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Footer from './Footer'

function Signup() {

    const [name,setname]=useState()
    const [email,setemail]=useState()
    const [password,setpassword]=useState()
    const navigate=useNavigate()

    const handleButton=(event)=>{
        event.preventDefault();
        axios.post("production-mern-amber.vercel.app/user",{name,email,password})
        .then((response)=>{
            console.log(response)
           

        })
        .catch((error)=>{
            console.log("error", error)
        })
        navigate("/login")
    }
  return (
    <>
   

    <Navbar/>
    <h1 className='text-center m-4  'style={{height:"10vh"}}>Create Post</h1>
      <form className="m-4 main-form " onSubmit={handleButton}  >
        <div className="mb-3  ">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
          
            onChange={(e) => setname(e.target.value)}
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
          
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <div className=''>  <button type="submit" className="btn btn-info  w-20">Signup</button>
        <Link to="/login"><button type="submit" className="btn btn-secondary float-end  ">Login</button></Link></div>
      </form>
     <Footer/>
    </>
  )
}

export default Signup
