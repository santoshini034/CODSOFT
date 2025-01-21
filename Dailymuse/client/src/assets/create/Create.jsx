import React from 'react'
import NavBar from "../NavBar"
import Page from "./Form"
import { useLocation,useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Create = () => {
    // declaration
    const navigate = useNavigate();
    const location = useLocation();
    const [username, setUsername] = useState(); 
    const token = location.state

    // cookie verification
    // useEffect(() => {
    //     const verifyCookie = async() => {

    //         if(!token){
    //             navigate('/login');
    //             return;
    //         }
    //         await axios.post('http://localhost:8080/create', {}, {
    //             headers: { 'Authorization': `Bearer ${token}` }
    //           }).then((res) => {
    //             if(res.data == 'failed'){
    //                 navigate('/login');
    //             }else{
    //                 // setUsername(res.data.username)
    //                 setUsername(res.data);
    //             }
    //           })
    //     }
    //     verifyCookie();
    // },[])
    // return data
  return (
    <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <NavBar token = {token}/>
                </div>
                <div className="col-9">
                    <Page token = {token}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Create