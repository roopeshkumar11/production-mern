import React from 'react'

import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Create from './componenet/Create';
import Show from './componenet/Show';
import Home from './componenet/Home';
import Update from './componenet/Update';
import Seepost from './componenet/Seepost';



function App() {
  return (
   


  
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/show' element={<Show/>}/>
      <Route path='/create' element={<Create/>}></Route>
      <Route path="/change/:id" element={<Update/>}></Route>
      <Route path="/see/:id" element={<Seepost/>}></Route>
      

      
    </Routes>
    </BrowserRouter>
    // <><Navbar/>
    // <Card/></>
  )
}

export default App
