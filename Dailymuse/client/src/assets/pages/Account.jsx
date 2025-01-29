import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import Navbar from "../components/Navbar"
import { ToastContainer, toast } from 'react-toastify'

const Account = () => {
  const [user,setUser] = useState({});
  const [post,setPost] = useState([]);


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

    useEffect(() => {
      let auth = localStorage.getItem('authToken');
      axios.post("http://localhost:8080/account",{auth}).then((res) => {
          if (res.data.success == true) {
            setUser(res.data);
            setPost(res.data.post);
          }else{
            handlerror(res.error.message)
                if (res.data.hessage  == "Token not found" || "User not found") {
                  setTimeout(() => {
                    navigate('/login')
                  }, 3000);
                }
          }
      })
    },[])
  return (
    <div>
      <Navbar/>
      <div className="main-body">
        <div className="row">
          <div className="col-10 offset-1 Dark2">
            <h1 className='m-2 signuphead'>Account</h1>
            <div className="row">
              <div className="col-4">
                <img className='accphoto' src={user.photo} alt="User photo" />
              </div>
              <div className="col-8">
                <p className='m-5'><b>Name: </b> {user.firstname} {user.lastname}</p>
                <p className='m-5'><b>Email: </b> {user.email}</p>
                <p className='m-5'><b>{user.follower} follower</b></p>
              </div>
            </div>
            <hr />
            <div className="post">
              {
                post.map((el) => {
                  return(
                    <div className='outer'>
                      <img src={el.image} alt="image" className='pop-image m-3' />
                      <div>
                        <p><b>{el.heading}</b></p>
                        <p>{el.view} view</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        <ToastContainer/> 
      </div>
    </div>
  )
}

export default Account
