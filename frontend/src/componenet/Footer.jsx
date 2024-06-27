import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "../style/footer.css"

function Footer() {
  return (
  
<>
<div className='bg-body-tertiary mt-4 lh-1 '>
    <div className='text-center  pt-4'>
    <p className='fw-normal fs-5'>JUSTHOUGHT </p>
<p className='fw-normal fs-5'>Made by roopeshkumar11</p> 
<p>Copyright © 2024 - All right reserved</p>


    </div>
    <div className="icon-conten text-center lh-1 fs-5  px-3  " ><FaGithub />
<FaInstagramSquare  />
<FaLinkedin/></div>
    




</div>
</>

  )
}

export default Footer