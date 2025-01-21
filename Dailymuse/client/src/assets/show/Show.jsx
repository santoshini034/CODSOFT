import React from 'react'
import NavBar from "../NavBar"
import Data from './Data'
import Review from './Review'
import { useLocation } from 'react-router-dom'

const Show = () => {
    const location = useLocation(); 
    const {user} = location.state;
    console.log(user);
    const token = user.token;
  return (
    <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <NavBar token = {token} />
                </div>
                <div className="col-9">
                    <Data/>
                    <Review/>
                </div>
            </div>
        </div>
    </div>
  )
}


export default Show
