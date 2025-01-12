import React from 'react'
import NavBar from "../NavBar"
import Data from './Data'
import Review from './Review'

const Show = () => {
  return (
    <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <NavBar/>
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
