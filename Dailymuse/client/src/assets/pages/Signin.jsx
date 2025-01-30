// import files
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

const Signin = () => {
    //declarations
    const [firstname,setFirstname] = useState("");
    const [lastname,setLastname] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [photo,setPhoto] = useState("");
    const navigate = useNavigate();


    const handlerror = (message) => toast.error(message, {
      position: 'top-right',
      autoClose: 3000,
      style: {
        color: '#000',
        padding: '10px',
        borderRadius: '5px',
      }
      })

    const handlesuccess = (message) => toast.success(message, {
      position: 'top-right',
      autoClose: 3000,
      style: {
        color: '#000',
        padding: '10px',
        borderRadius: '5px',
      }
      })

    //handle submit
    const handlesubmit = (e) => {
        e.preventDefault();
        if(firstname =="" || lastname == "" || email == "" || password == ""){
          const message = "Enter valid credentials";
            handlerror(message);
        }else{
            axios.post("https://codsoft-1-mxid.onrender.com/signin", {firstname, lastname, email, password, photo}).then((res) => {
                if(res.data.success == true){
                    localStorage.setItem('authToken', res.data.token);
                   handlesuccess(res.data.message);
                   setTimeout(() => {
                    navigate('/');
                  },4000)
                }else{
                  handlerror(res.data.message);
                }
            })
        }

    }
    
    //return value
  return (
    <div className='row'>
      <div className='col-6 offset-3 mt-5 Dark2 form'>
      <h1 className='m-3 signuphead'>signup Now</h1>
      <form onSubmit={handlesubmit} className='m-3'>
        <div class="mb-3">
          <label for="firstname" class="form-label">First name: </label>
          <input type="firstname" class="form-control" id="firstname" placeholder="Enter first name" autoComplete='off' value={firstname} onChange={(e) => {setFirstname(e.target.value)}} />
        </div>
        <div class="mb-3">
          <label for="lastname" class="form-label">Last name:</label>
          <input type="lastname" class="form-control" id="lastname" placeholder="Enter last name" autoComplete='off' value={lastname} onChange={(e) => {setLastname(e.target.value)}} />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input type="email" class="form-control" id="email" placeholder="name@example.com" autoComplete='off' value={email} onChange={(e) => {setEmail(e.target.value)}} />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password" placeholder="Enter password" autoComplete='off' value={password} onChange={(e) => {setPassword(e.target.value)}} />
        </div>
        <div class="mb-3">
          <label for="photo" class="form-label">photo</label>
          <input type="photo" class="form-control" id="photo" placeholder="enter Photo url" autoComplete='off' value={photo} onChange={(e) => {setPhoto(e.target.value)}} />
        </div>
        <button className='btn btn-success'>Submit</button>
      </form>
      </div> 
      <ToastContainer/>     
    </div>
  )
}

export default Signin
