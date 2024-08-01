import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Footer from './Footer'

function Login() {

   
    const [email,setemail]=useState()
    const [password,setpassword]=useState()
    const navigate=useNavigate()

    const handleButton=(event)=>{
        event.preventDefault();
        axios.post("https://production-mern-amber.vercel.app/loginuser",{email,password})
        .then((response)=>{
             console.log(response)
            if(response.data==="success"){
            console.log("successfull login")
            localStorage.setItem("datauser", email,password);
            
            navigate("/show")
            window.location.reload();


         
            }

            else{
                console.log("password s not correct")
                alert("Password is wrong")
            }
        })
        .catch((error)=>{
            console.log("error", error)
        })
    }
  return (
    <>
   

    <Navbar/>
    <h1 className='text-center m-4'>Create Post</h1>
      <form className="m-4 main-form " onSubmit={handleButton}  >
       
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
      <div className=''>  <button type="submit" className="btn btn-info  ">Login</button>
      <Link to="/signup"><button type="submit" className="btn btn-secondary float-end ">Sigup</button></Link></div>
      </form>
      <Footer/>
    
    </>
  )
}

export default Login
