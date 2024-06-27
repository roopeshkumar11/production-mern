import React from 'react'

function Logout() {
  const handlebutton=()=>{
    localStorage.removeItem("datauser")
    window.location.reload()

  }
  return (
   <>
   <button className='btn btn-info ' onClick={handlebutton}>Logout</button>
   </>
  )
}

export default Logout