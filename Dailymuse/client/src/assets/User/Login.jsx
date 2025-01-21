import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast} from 'react-toastify'

const Login = () => {
  const navigate =useNavigate();
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

  const checkuser = async(e) => {
    e.preventDefault();
    if(username == "" || password == ""){
      const data = "Enter valid credentials";
      handleError(data)
      
    }else{
      await axios.post("http://localhost:8080/login",{username, password}).then((res) => {
        const token = res.data.token
        if (res.data.success == true) {
          handleSuccess(res.data.message);
          setTimeout(() => {
            navigate("/",{ state: token});
          }, 1000);
        } else {
          handleError(res.data.message);
        }
      })
    }
    setUsername("");
    setPassword("");
  }
  return (
    <div>
      <div>
      <div className="container mt-5">
        <div className="row">
            <div className="col-6 offset-3 loginpage">
                <h2 className='m-3 lihead'>Login</h2>
                <form onSubmit={checkuser} className='loginform'>
                    <div className="col-8 offset-2">
                        <div className='pb-3 lidata'>
                            <label htmlFor="username">Username: </label>
                            <input type="text" name="username" id="username" placeholder='Enter username' autoComplete='off' value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className='pb-3 lidata'>
                            <label htmlFor="password">Password: </label>
                            <input type="password" name="password" id="password" placeholder='Enter password' autoComplete='off' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className='pb-3 lidata'>
                        <button className='btn btn-primary'>Submit</button>
                        </div>
                    </div>
                </form>
                <ToastContainer />
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login



// const Signup = () => {

// const handleSuccess = (msg) =>
//   toast.success(msg, {
//     position: "bottom-right",
//   });

// const handleError = (err) =>
//   toast.error(err, {
//     position: "bottom-left",
//   });

// const adduser = (e) => {
//   e.preventDefault();
//   if(email == undefined || username == undefined || password == undefined){
//     alert("Enter valid credentials");
//   }else{
//     axios.post("http://localhost:8080/signup", {email, username, password}).then((res) => {
//       console.log(res);
//       if (res.data.success == true) {
//         handleSuccess(res.data.message);
//         setTimeout(() => {
//           navigate("/");
//         }, 1000);
//         } else {
//           handleError(res.data.message);
//         }
//     })
//   }
// }

// }

