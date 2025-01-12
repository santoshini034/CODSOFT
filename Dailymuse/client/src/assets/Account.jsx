import React from 'react'
import { Link } from 'react-router-dom'

const Account = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
            <div className="col-8 offset-2 account">
                <h1>Account</h1>
                <p><b>Email address:</b></p>
                <p className='mb-5'>sam@gmail.com</p>
                <p><b>Username:</b></p>
                <p className='mb-5' >sam125</p>
                <p  className='mb-5'><b>Post : 5</b></p>
                <div className="pb-5">
                <Link to='/create'  className='btn btn-success'>Create Your Post</Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Account
