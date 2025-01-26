import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from "../components/Navbar"

const Show = () => {
    //declaration
    const {id} = useParams();  
    const [data, setData] = useState({})
    const [user, setUser] = useState({})
    const [review, setReview] = useState("")
    const [sreview, setSreview] = useState([]);

    //useeffect
    useEffect(() => {
        axios.get(`http://localhost:8080/show/${id}`).then((res) => {
            setData(res.data.data);
            setSreview(res.data.data.review);
            setUser(res.data.user);
        })
    },[])

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
            axios.post(`http://localhost:8080/review/${id}`, {auth, review}).then((res) => {
              setSreview(res.data.review);
            })
        }
    }

    //handle review
    const follower = () => {
      let auth = localStorage.getItem("authToken");
      console.log(auth);

        if(!auth){
          handlerror("login to write a review")
          setTimeout(() => {
            return  navigate('/login');
          },4000)
         }

        axios.post(`http://localhost:8080/follower`, {auth,user}).then((res) => {
          setUser(res.data);
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
      </div>
    </div>
  )
}

export default Show