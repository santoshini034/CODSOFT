import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import Navbar from "../components/Navbar" 
import Cards from "../components/Cards"
import Popular from "../components/Popular"
import { ToastContainer, toast } from 'react-toastify'

const Home = () => {

  //declaration
  const [data,setData] = useState([]);
  const [user,setUser] = useState([]);

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

  //useeffect
  useEffect(() => {
    axios.post("http://localhost:8080/home").then((res) => {
      if (res.data.success == true) {
        setData(res.data.posts);
        setUser(res.data.user);
      } else {
        handlerror(res.data.message)
      }
    })
  },[])

  //categories
  const cate = (category) => {
    axios.post("http://localhost:8080/category",{category}).then((res) => {
      if (res.data.success == true) {
        console.log(res.data.posts);
        setData(res.data.posts);
      } else {
        handlerror(res.data.message)
      }
    })
  }

  return (
    <div>
      <Navbar />
      <div className='main-body'>
      <div className='m-2'>
        <h3>Categories</h3>
        <button className='btn btn-danger m-2' onClick={() => cate("news")}><i class="fa-solid fa-newspaper"></i> News</button>
        <button className='btn btn-primary m-2' onClick={() => cate("sport")}><i class="fa-solid fa-medal"></i> Sports</button>
        <button className='btn btn-dark m-2' onClick={() => cate("coding")}><i class="fa-solid fa-terminal"></i> Coding</button>
        <button className='btn btn-success m-2' onClick={() => cate("education")}><i class="fa-solid fa-school"></i> Education</button>
        <button className='btn btn-warning m-2' onClick={() => cate("fashion")}><i class="fa-solid fa-shirt"></i> Fashion</button>
      </div>
      <div className='row'>
        <div className='col-9'>
          {data.map((da) => {
              return (
                < Cards image= {da.image} date= {da.date} type= {da.dtype} heading= {da.heading} id= {da._id}/>
              )
            })
          }
        </div>
        <div className='col-3 Dark1'>
          <div className='col-3 Dark2 pop-box shadow'>
            <p className='popularheading m-2'>Popular writer</p>
            {user.map((us) => {
              if(us.follower >= 5){
                return (
                  < Popular type="writer" image= {us.photo} name= {us.firstname} num= {us.follower} id = {us._id}/>
                )
              }
            })
          }
          </div>
          <div className='col-3 Dark2 pop-box shadow'>
            <p className='popularheading m-2'>Popular article</p>
            {data.map((da) => {
              if(da.view >= 5){
                return (
                  < Popular type = "article" image= {da.image} name = {da.heading} num = {da.date} id = {da._id}/>
                )
              }
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

export default Home