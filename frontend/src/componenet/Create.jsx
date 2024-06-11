import React, { useState } from 'react';

import Navbar from './Navbar';
import axios from 'axios';
import "../style/Create.css"
import { useNavigate } from 'react-router-dom';

function Create() {
  const [title, setTitle] = useState('');
  const [thought, setThought] = useState('');
  const navigate = useNavigate();

  const handleButton = (event) => {
    event.preventDefault();

    
    axios.post('http://localhost:8080/create', {title,thought})
      .then((response) => {
        console.log('Response:', response);
      })
      .catch((error) => {
        console.log('There was an error!', error);
      });

      navigate("/show")
  };
  

  return (
    <>
      <Navbar />
      <h1 className='text-center m-4'>Create Post</h1>
      <form className="m-4 main-form " onSubmit={handleButton}  >
        <div className="mb-3  ">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="thought" className="form-label">Thought</label>
          <input
            type="text"
            className="form-control"
            id="thought"
            value={thought}
            onChange={(e) => setThought(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-submit ">Submit</button>
      </form>
    </>
  );
}

export default Create;


