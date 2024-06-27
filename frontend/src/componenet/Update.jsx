import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // Import useNavigate
import Navbar from './Navbar';
import axios from 'axios';
import "../style/Create.css";
import Footer from './Footer';

function Update() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [thought, setThought] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  console.log("id:", id); // Check if id is received correctly

  // Fetch the current post data when the component mounts
  useEffect(() => {
    if (id) { // Ensure id is valid
      axios.get(`https://production-mern-amber.vercel.app/change/${id}`)
        .then((response) => {
          const { title, thought } = response.data;
          setTitle(title);
          setThought(thought);
          console.log('Response:', response);
        })
        .catch((error) => {
          console.log('There was an error!', error);
        });
    }
  }, [id]);

  // Handle form submission to update the post
  const handleButton = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put(`https://production-mern-amber.vercel.app/change/${id}`, { title, thought });
      console.log('Response:', response);
      navigate("/show");
    } catch (error) {
      console.log('There was an error updating the post!', error);
    }
  };

  return (
    <>
      <Navbar />
      <h1 className='text-center m-4 '>Update Post</h1>
      <form className="m-4 main-form" onSubmit={handleButton}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="thought" className="form-label">Thought</label>
          <input
            type="text"
            className="form-control"
            id="thought"
            value={thought}
            onChange={(e) => setThought(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-submit">Submit</button>
      </form>
      <Footer/>
    </>
  );
}

export default Update;

