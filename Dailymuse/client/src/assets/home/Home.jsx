import React from 'react'
import NavBar from "../NavBar"
import Page from "./Page"
import { useLocation } from 'react-router-dom';


const Home = () => {
    const location = useLocation();
    const token = location.state;
    console.log(token);
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
  )};

  export default Home