import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import Navbar from "../components/Navbar"

const Account = () => {
  const [user,setUser] = useState({});
  const [post,setPost] = useState([]);


    useEffect(() => {
      let auth = localStorage.getItem("authToken");
      axios.post("http://localhost:8080/account",{auth}).then((res) => {
          setUser(res.data);
          setPost(res.data.post);
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
      </div>
    </div>
  )
}

export default Account
