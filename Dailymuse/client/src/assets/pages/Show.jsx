import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from "../components/Navbar"
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';

const Show = () => {
    //declaration
    const {id} = useParams();  
    const [data, setData] = useState({})
    const [user, setUser] = useState({})
    const [review, setReview] = useState("")
    const [sreview, setSreview] = useState([]);
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


    //useeffect
    useEffect(() => {
        axios.get(`https://codsoft-1-backend.onrender.com/show/${id}`).then((res) => {
            if (res.data.success == true) {
              setData(res.data.data);
              setSreview(res.data.data.review);
              setUser(res.data.user);
            } else {
              handlerror(res.error.message)
            }
        })
    },[])


    //handle review
    const handlereview = (e) => {
      e.preventDefault();
      let auth = localStorage.getItem("authToken");
      console.log(auth);

        if(!auth){
            handlerror("login to write a review")
            setTimeout(() => {
              return  navigate('/login');
            },4000)
         }

        if(review == ""){
          handlerror("Enter valid credentials")
        } else{
            axios.post(`https://codsoft-1-mxid.onrender.com/review/${id}`, {auth, review}).then((res) => {
              if (res.data.success == true) {
                setSreview(res.data.review);
              } else {
                handlerror(res.error.message)
                if (res.data.hessage  == "Token not found" || "User not found") {
                  setTimeout(() => {
                    navigate('/login')
                  }, 3000);
                }
              }
            })
        }
    }

    //handle review
    const follower = () => {
      let auth = localStorage.getItem('authToken');

        if(!auth){
          handlerror("login to write a review")
          setTimeout(() => {
            return  navigate('/login');
          },4000)
         }

        axios.post(`https://codsoft-1-mxid.onrender.com/follower`, {auth,user}).then((res) => {
          if (res.data.success == true) {
            console.log(res)
            setUser(res.data.data2);
          }else{
            handlerror(res.error.message)
                if (res.data.hessage  == "Token not found" || "User not found") {
                  setTimeout(() => {
                    navigate('/login')
                  }, 3000);
                }
          }
        })
    }
 

  return (    
    <div>
      <Navbar />
      <div className='main-body'>
        <div className='row'>
          <div className='col-10 offset-1 mt-4 p-4 Dark2'>
            <div className="headingsect">
              <div className="row">
                <div className="col-8">
                  <h1>{data.heading}</h1>
                  <span className='bgred me-4'>{data.dtype}</span>
                  <span>{data.view} Views</span>
                  <div className='outer mt-5 mb-2'>
                    <img src={user.photo} alt="" className='pop-image m-3' />
                    <div>
                      <p><b className='mb-0'>{user.firstname} {user.lastname}</b></p>
                      <p>{user.follower} followers</p>
                    </div>
                  </div>
                  <button className='btn btn-primary mb-5' onClick={follower}>follow</button>
                </div>
                <div className="col-4">
                  <img src={data.image} alt="" className='showimage' />
                </div>
              </div>
            </div>
            <div className="body pt-3">
              <p>{data.information}</p>
            </div>
          </div>
        </div>
      
      {/* review form */}
      <div className="row mt-5">
        <div className="col-10 offset-1 p-3 Dark2">
          <h1 className="signuphead">review section</h1>
          <form onSubmit={handlereview}>
            <div class="mb-3">
              <label for="review" class="form-label">Review</label>
              <input type="text" class="form-control" id="review" placeholder="Enter a review" autoComplete='off' value={review} onChange={(e) => {setReview(e.target.value)}} />
            </div>
            <button className='btn btn-primary'>submit</button>
          </form>
          <div className="row">
              {
                sreview.map((rev) => {
                  return(
                    <div className='col-6'>
                      <span className='bgred me-4'>{rev.date}</span>
                      <span>{rev.user}</span>
                      <p>{rev.review}</p>
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

export default Show
