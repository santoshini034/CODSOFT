//import files
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'


const Login = () => {
    //declarations
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
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

    //handle submit
    const handlesubmit = (e) => {
        e.preventDefault();
        if(email == "" || password == ""){
          const message = "Enter valid credentials";
          handlerror(message);
        }
        else{
            axios.post("http://localhost:8080/login", {email, password}).then((res) => {
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
      <h1 className='m-3 signuphead'>Login</h1>
      <form onSubmit={handlesubmit} className='m-3'>
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input type="email" class="form-control" id="email" placeholder="name@example.com" autoComplete='off' value={email} onChange={(e) => {setEmail(e.target.value)}} />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password" placeholder="Enter password" autoComplete='off' value={password} onChange={(e) => {setPassword(e.target.value)}} />
        </div>
        <button className='btn btn-primary'>Submit</button>
      </form>
      <p>Not Registered? <a href="/signin">Register</a></p>
      </div> 
      <ToastContainer/>     
    </div>
  )
}

export default Login