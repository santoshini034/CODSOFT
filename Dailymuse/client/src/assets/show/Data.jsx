import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Data = () => {
    const [da, setData] = useState({});
    const location = useLocation(); 
    const id = location.state;
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:8080/show/${id}`).then((res) => {
            console.log(res.data);
            setData(res.data);
        })
    },[])
    const navi = (id) => {
        navigate('/edit', { state: id });
    } 

  return (
    <div className="container mt-3">
        <div className="row">
            <div className="col-10 offset-1 showdata Dark2">
                <h2 className='m-3 dataHeading Dark2'>{da.heading}</h2>
                <img src={da.image} alt="" />
                <br />
                <br />
                <div className="datadetails">
                    <span className='Dark2'><b className='Dark2' >Post by @sam</b></span>
                    <span className='Dark2'><b className='Dark2'>{da.date}</b></span>
                    <span className='Dark2'><i class="fa-regular fa-heart Dark2"></i></span>
                    <span className='Dark2'><i class="fa-solid fa-clock Dark2"></i>Watch</span>
                </div>
                <p className='col-10 offset-1 Dark2'>
                    {da.information}
                </p>
                <div className="databtn Dark2">
                    <a onClick={() => navi(da._id)} className='btn btn-success' >Edit</a>
                    <button className='btn btn-danger'>Delete</button>
                </div>
            </div>
        </div>
    </div>  
  )
}

export default Data
