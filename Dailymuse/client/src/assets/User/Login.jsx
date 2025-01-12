import React from 'react'

const Login = () => {
  return (
    <div>
      <div>
      <div className="container mt-5">
        <div className="row">
            <div className="col-6 offset-3 loginpage">
                <h2 className='m-3 lihead'>Login</h2>
                <form action="#" className='loginform'>
                    <div className="col-8 offset-2">
                        <div className='pb-3 lidata'>
                            <label htmlFor="username">Username: </label>
                            <input type="text" name="username" id="username" placeholder='Enter username' />
                        </div>
                        <div className='pb-3 lidata'>
                            <label htmlFor="password">Password: </label>
                            <input type="password" name="password" id="password" placeholder='Enter password' />
                        </div>
                        <div className='pb-3 lidata'>
                        <button className='btn btn-primary'>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login
