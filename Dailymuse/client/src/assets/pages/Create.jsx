import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar'
import { ToastContainer, toast } from 'react-toastify'

const Create = () => {
    //declaration
    const [heading, setHeading] = useState("");
    const [image, setImage] = useState("");
    const [dtype, setDtype] = useState("");
    const [information, setInformation] = useState("");
    const navigate = useNavigate();


    //handle error
    const handlerror = (message) => toast.error(message, {
      position: 'top-right',
      autoClose: 3000,
      style: {
        color: '#000',
        padding: '10px',
        borderRadius: '5px',
      }
    })
    
    //handle success
    const handlesuccess = (message) => toast.success(message, {
      position: 'top-right',
      autoClose: 3000,
      style: {
        color: '#000',
        padding: '10px',
        borderRadius: '5px',
      }
    })

    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(dtype)
        let auth = localStorage.getItem('authToken');

        if(!auth){
            handlerror("Login to create post")
            setTimeout(() => {
              return navigate('/login');
            },4000)
         }

        if(heading == "" || image == "" || dtype =="" || information == ""){
          handlerror("Enter valid credentials")
        } else{
            axios.post('http://localhost:8080/addpost', {auth, heading, image, dtype,information}).then((res) => {
                if(!res.data.success){
                  handlerror(res.data.message)
                    setTimeout(() => {
                      return navigate('/login');
                    },4000)
                }else{
                  handlesuccess(res.data.message)
                  setTimeout(() => {
                    return navigate('/');
                  },4000)
                }
            })
        }
    }
  return (
    <div>
      <Navbar />
      <div className='main-body'>
        <div className='row'>
          <div className='col-6 offset-3 mt-3 Dark2 form'>
            <h1 className='m-3 signuphead'>Create Your Blog</h1>
            <form onSubmit={handlesubmit} className='m-3'>
              <div class="mb-3">
                <label for="heading" class="form-label">Topic:</label>
                <input type="text" class="form-control" id="heading" placeholder="Enter Topic" autoComplete='off' value={heading} onChange={(e) => {setHeading(e.target.value)}} />
              </div>
              <div class="mb-3">
                <label for="image" class="form-label">Image url:</label>
                <input type="text" class="form-control" id="image" placeholder="Enter image url" autoComplete='off' value={image} onChange={(e) => {setImage(e.target.value)}} />
              </div>
              <div class="mb-3">
                <label for="dtype" class="form-label">Type:</label>
                <select class="form-select" aria-label="Default select example" id='dtype' value={dtype} onChange={(e) => {setDtype(e.target.value)}} >
                  <option selected>Open this select menu</option>
                  <option value="news">News</option>
                  <option value="sport">Sport</option>
                  <option value="coding">Coding</option>
                  <option value="education">Education</option>
                  <option value="fashion">Fashion</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="information" class="form-label">Enter your blog:</label>
                <textarea class="form-control" id="information" rows="3" autoComplete='off' value={information} onChange={(e) => {setInformation(e.target.value)}}></textarea>
              </div>
              <button className='btn btn-primary'>Submit</button>
            </form>
          </div> 
          <ToastContainer/>     
        </div>
      </div>
    </div>
  )
}

export default Create