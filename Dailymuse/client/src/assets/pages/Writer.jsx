import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Cards from "../components/Cards"
import axios from 'axios'

const Writer = () => {
    //declaration
    const {id} = useParams();
    const [user, setUser] = useState({});
    const [post, setPost] = useState([]);

    //useEffect
    useEffect(() => {
        axios.post(`http://localhost:8080/writer/${id}`).then((res) => {
            setUser(res.data)
            setPost(res.data.post)
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
    </div>
  )
}

export default Writer
