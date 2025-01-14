import { useState, useEffect } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Body = () => {
    const [alldata, setAlldata] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/home").then((res) => {
            let data = res.data;
            setAlldata(data);
        })
    },[])

    const navigate  = useNavigate();

    const toshow = async (id) => {
        navigate('/show', { state: id })
    }



  return (
    <div>
        <h1 className='homeHeading'>All about today!</h1>
        {
            alldata.map(data => {
                return(
                    <div className='card Dark2' onClick={() => {toshow(data._id)}}>
                    <img src= {data.image}  className='card-img-top Dark2' alt="..."/>
                    <hr />
                    <div className='card-body Dark2'>
                        <p className='card-text Dark2'><b>{data.heading}</b></p>
                    </div>
                </div>
                )
            })
        }
    </div>
  )
}

export default Body
