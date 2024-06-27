import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { useParams ,useNavigate} from 'react-router-dom';
import "../style/seepost.css"
import Footer from './Footer';




function Seepost() {
    const {id}=useParams()
   const navigate=useNavigate()
    
  const [data, setData] = useState([]);
  console.log(id)

  useEffect(() => {
    axios.get(`https://production-mern-amber.vercel.app/see/${id}`)
      .then((response) => {
        setData(response.data);
        // console.log(response.data)
      })
  }, []);


  const handledelete=()=>{
    
    
  axios.delete(`https://production-mern-amber.vercel.app/see/${id}`)
  .then((reponse)=>{
   
    console.log("delete",reponse)
    window.location.reload();

 

  })
  navigate("/show")
}

  return (
    <>
      <Navbar/>
        <div className="container mt-5  " >
          <div className="row  col-7 col-md-4  col-sm-4  contain mt-5 " >
            {
              <div className="card  m-4  " style={{ width: "22rem" }}>
                <div className="card-body">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">{data.thought}</p>
                </div>
                <button  className='btn btn-danger mb-4'onClick={handledelete} >Delete</button>
              </div>
            
            
            }
          </div>
        </div>
     <Footer/>
    </>
  );
}

export default Seepost;
