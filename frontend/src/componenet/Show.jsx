import React, { useEffect, useState } from 'react'

import Navbar from './Navbar'
import axios from 'axios'
import "../style/Show.css"
import { Link } from 'react-router-dom'
import { useAuth } from '../context/contextapi'
import Footer from './Footer'
function Show() {

  const [data,setdata]=useState([])
  

  useEffect(()=>{
    axios.get("production-mern-amber.vercel.app/show")
    .then((reponse)=>{
      
      setdata(reponse.data)
        console.log(reponse.data)
      
    })
  },[])
 
  return (
 
    <><Navbar/>

<div className="container mt-4 offset-1 main-show    " >
<div className="row  show-row">
 
      {data.map(item=>(
       <div className="card col-12 col-md-4 m-4  show-item " style={{width: "22rem"}}>
       {/* <img src="..." className="card-img-top" alt="..."/> */}
       <div className="card-body">
         <h5 className="card-title">{item.title}</h5>
         <p className="card-text">{item.thought}</p>
         

         

         
        </div>
        <div className="btn-show">
        <Link className="nav-link" to={"/change/"+item._id} ><button className='btn btn-success mb-4'>Update</button></Link>
        <Link className="nav-link " to={"/see/"+item._id} ><button className='btn btn-primary mb-4 see'>See</button></Link>
        </div>
        
     
       
      </div>

      ))
}</div></div>

   <Footer/></>
  )
}

export default Show


