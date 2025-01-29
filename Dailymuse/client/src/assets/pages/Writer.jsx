import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Cards from "../components/Cards"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
const Writer = () => {
    //declaration
    const {id} = useParams();
    const [user, setUser] = useState({});
    const [post, setPost] = useState([]);


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


    //useEffect
    useEffect(() => {
        axios.post(`http://localhost:8080/writer/${id}`).then((res) => {
          console.log(res);
            if (res.data.success == true) {
              setUser(res.data.user)
              setPost(res.data.user.post)
            } else {
              handlerror(res.data.message);
            }
        })
    },[])

    console.log(user);
  return (
    <div>
        <Navbar/>
        <div className="main-body">
            <h1 className='mt-3'>{user.firstname} {user.lastname}</h1> 
            <div className='col-10'>
            {post.map((da) => {
              return (
                < Cards image= {da.image} date= {da.date} type= {da.dtype} heading= {da.heading} id= {da._id}/>
              )
            })
          }
        </div>  
        </div>   
         <ToastContainer/>   
    </div>
  )
}

export default Writer
