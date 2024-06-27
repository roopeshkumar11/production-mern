import React from 'react'

import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter, Routes ,Route, Navigate} from 'react-router-dom';
import Create from './componenet/Create';
import Show from './componenet/Show';
import Home from './componenet/Home';
import Update from './componenet/Update';
import Seepost from './componenet/Seepost';
import Login from './componenet/Login';
import Signup from './componenet/Signup';
import { useAuth } from './context/contextapi';




function App() {
  const [authuser,setauthuser]=useAuth()
  return (
   


  
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/show' element={authuser?<Show/>:<Navigate to="/signup"/>}></Route>
      <Route path='/create' element={authuser?<Create/>:<Navigate to="/signup"/>}></Route>
      <Route path="/change/:id" element={<Update/>}></Route>
      <Route path="/see/:id" element={<Seepost/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      

      
    </Routes>
    </BrowserRouter>
    // <><Navbar/>
    // <Card/></>
  )
}

export default App
