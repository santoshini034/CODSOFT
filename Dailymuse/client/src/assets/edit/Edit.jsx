import React from 'react'

import Form from './Form'
import NavBar from '../NavBar'

const Edit = () => {
  return (
    <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <NavBar/>
                </div>
                <div className="col-9">
                    <Form/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Edit
