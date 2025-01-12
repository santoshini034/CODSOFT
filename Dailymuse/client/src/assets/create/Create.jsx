import React from 'react'
import NavBar from "../NavBar"
import Page from "./Form"

const Create = () => {
  return (
    <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <NavBar/>
                </div>
                <div className="col-9">
                    <Page/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Create