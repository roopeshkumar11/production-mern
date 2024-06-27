import React from 'react'
import Navbar from './Navbar'
import "../style/Home.css"
import { Link } from 'react-router-dom'
import Footer from './Footer'


function Home() {
  return (
    
    <>
    <Navbar/>
        <div className='main-home'>

        <h1 className='text-center m-4'>Generate Our Quote & Post</h1>
        <p className='text-center text-thought  content-home'>
Welcome to Thought Post, a place to share your ideas and inspirations. Connect with others by expressing your thoughts creatively. Join a community of like-minded people and explore different perspectives. Start sharing your thoughts today and let your voice be heard!
</p>
<button className='btn btn-success  btn-create  '><Link  className='nav-link' to="/create">Create Post</Link></button>

        </div>

   
     <Footer/>
    

   
    </>
  )
}

export default Home