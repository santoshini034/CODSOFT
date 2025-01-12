import React from 'react'
import NavBar from "../NavBar"
import Post from './Post'


const Watch = () => {
  return (
    <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <NavBar/>
                </div>
                <div className="col-9">
                    <Post/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Watch
