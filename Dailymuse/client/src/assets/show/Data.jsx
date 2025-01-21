import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Data = () => {
    // declaration
    const [da, setData] = useState({});
    const [username, setUsername] = useState("");
    const [logusername, setLogusername] = useState("");
    const location = useLocation(); 
    const {user} = location.state;
    const id = user.id;
    const token = user.token;
    const navigate = useNavigate();

    // data to show
    useEffect(() => {
        axios.get(`http://localhost:8080/show/${id}`).then((res) => {
            setData(res.data.iddata);
            setUsername(res.data.username);
        })
    },[])

// navigate to edit page
    const verifyCookie = async(id) => {
        if(!token){
            navigate('/login');
            return;
        }
        await axios.post(`http://localhost:8080/entrytoedit/${id}`, {}, {
            headers: { 'Authorization': `Bearer ${token}` }
          }).then((res) => {
            if(res.data == 'failed'){
                navigate('/login');
            }else{
                const user = { id, token };
                navigate('/edit', { state: {user} })
            }
          })
    }

// delete
    const del = async(id) => {
        console.log(token);
        if(!token){
            navigate('/login');
            return;
        }
        await axios.post(`http://localhost:8080/delete/${id}`, {}, {
            headers: { 'Authorization': `Bearer ${token}` }
          }).then((res) => {
            console.log(res);
            // if(res.data == 'failed'){
            //     navigate('/login');
            // }else{
            //     const user = { id, token };
            //     navigate('/edit', { state: {user} })
            // }
          })
    }

        
        // navigate('/edit', { state: id }); 

  return (
    <div className="container mt-3">
        <div className="row">
            <div className="col-10 offset-1 showdata Dark2">
                <h2 className='m-3 dataHeading Dark2'>{da.heading}</h2>
                <img src={da.image} alt="" />
                <br />
                <br />
                <div className="datadetails">
                    <span className='Dark2'><b className='Dark2' >Post by @{username}</b></span>
                    <span className='Dark2'><b className='Dark2'>{da.date}</b></span>
                    <span className='Dark2'><i class="fa-regular fa-heart Dark2"></i></span>
                    <span className='Dark2'><i class="fa-solid fa-clock Dark2"></i>Watch</span>
                </div>
                <p className='col-10 offset-1 Dark2'>
                    {da.information}
                </p>
                <div className="databtn Dark2">
                    <a onClick={() => verifyCookie(da._id)} className='btn btn-success' >Edit</a>
                    <button className='btn btn-danger' onClick={() => del(da._id)}>Delete</button>
                </div>
            </div>
        </div>
    </div>  
  )
}

export default Data
