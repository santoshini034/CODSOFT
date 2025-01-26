import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'

const Navbar = () => {
  //Declaration
  let auth = localStorage.getItem("authToken");
  let [btnvalue, setBtnvalue] = useState("") 
  const navigate = useNavigate();

  //useeffect
  useEffect(() => {
    if(!auth){
      setBtnvalue("Login")
    }else{
      setBtnvalue("Logout")
    }
  },[])


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

  //authenticate user
  const authentication = () => {
    if(!auth){
      navigate('/login')
    }else{
      localStorage.removeItem('authToken');
      setBtnvalue("Login");
      handlerror("User Logged out");
    }
  }
  return (
      <nav className="navbar navbar-expand-lg Dark2 shadow">
        <div className="container-fluid Dark2">
          <a className="navbar-brand Dark2" href="/"><b className='Dark2'>Daily<span className='Dark2' style={{color:"red"}}>muse</span></b></a>
          <div className="collapse navbar-collapse Dark2" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link Dark2" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link Dark2" href="/create">Create</a>
              </li>
              <li className="nav-item">
                <a className="nav-link Dark2" href="/account">Account</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='d-flex Dark2'>
          <button className='btn btn-primary m-3' onClick={authentication}>{btnvalue}</button>
        </div>
        <ToastContainer/>    
      </nav>
  )
}

export default Navbar
