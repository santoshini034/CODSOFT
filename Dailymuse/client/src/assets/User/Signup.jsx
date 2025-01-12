import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
            <div className="col-6 offset-3 signuppage">
                <h2 className='m-3 suhead'>Sign up</h2>
                <form action="#" className='signupform'>
                    <div className="col-8 offset-2">
                        <div className='pb-3 sudata'>
                            <label htmlFor="email">Email: </label>
                            <input type="email" name="email" id="email" placeholder='Enter email' />
                        </div>
                        <div className='pb-3 sudata'>
                            <label htmlFor="username">Username: </label>
                            <input type="text" name="username" id="username" placeholder='Enter username' />
                        </div>
                        <div className='pb-3 sudata'>
                            <label htmlFor="password">Password: </label>
                            <input type="password" name="password" id="password" placeholder='Enter password' />
                        </div>
                        <div className='pb-3 sudata'>
                        <button className='btn btn-success'>Submit</button>
                        </div>
                        <p className=' mb-5 linktologin'>if already registered <Link to='/login' className='linktologin'> login </Link></p>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
