import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast} from 'react-toastify'

const Signup = () => {
const navigate =useNavigate();
const [email, setEmail] = useState();
const [username, setUsername] = useState();
const [password, setPassword] = useState();

const handleSuccess = (msg) =>
  toast.success(msg, {
    position: "bottom-right",
  });

const handleError = (err) =>
  toast.error(err, {
    position: "bottom-left",
  });

const adduser = (e) => {
  e.preventDefault();
  if(email == undefined || username == undefined || password == undefined){
    const data = "Enter valid credentials"
    handleError(data)
  }else{
    axios.post("http://localhost:8080/signup", {email, username, password}).then((res) => {
    console.log(res);
    if (res.data.success == true) {
      handleSuccess(res.data.message);
      setTimeout(() => {
        navigate("/");
      }, 1000);
      } else {
        handleError(res.data.message);
      }
    })
  }
  setEmail("");
  setUsername("");
  setPassword("");
}

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
            <div className="col-6 offset-3 signuppage">
                <h2 className='m-3 suhead'>Sign up</h2>
                <form onSubmit={adduser} className='signupform'>
                    <div className="col-8 offset-2">
                        <div className='pb-3 sudata'>
                            <label htmlFor="email">Email: </label>
                            <input type="email" name="email" id="email" placeholder='Enter email' autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='pb-3 sudata'>
                            <label htmlFor="username">Username: </label>
                            <input type="text" name="username" id="username" placeholder='Enter username' autoComplete='off' value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className='pb-3 sudata'>
                            <label htmlFor="password">Password: </label>
                            <input type="password" name="password" id="password" placeholder='Enter password' autoComplete='off' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className='pb-3 sudata'>
                        <button className='btn btn-success'>Submit</button>
                        </div>
                        <p className=' mb-5 linktologin'>if already registered <Link to='/login' className='linktologin'> login </Link></p>
                    </div>
                </form>
                <ToastContainer />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Signup