import React, { useEffect, useState } from 'react'

import Navbar from './Navbar'
import axios from 'axios'
import "../style/Show.css"
import { Link } from 'react-router-dom'
function Show() {

  const [data,setdata]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:8080/show")
    .then((reponse)=>{
      setdata(reponse.data)
        console.log(reponse.data)
      
    })
  },[])
  
  return (
 
    <><Navbar>

<div className="container mt-4 offset-1   " >
<div className="row ">
 
      {data.map(item=>(
       <div className="card col-12 col-md-4 m-4" style={{width: "22rem"}}>
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

    </Navbar></>
  )
}

export default Show


