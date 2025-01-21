import React from 'react'
import Form from './Form'
import NavBar from '../NavBar'
import { useLocation } from 'react-router-dom'

const Edit = () => {
    const location = useLocation();
    const {user} = location.state;
    const token = location.state.token;
    const id = location.state.id;
    console.log(user)
  return (
    <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <NavBar token = {token}/>
                </div>
                <div className="col-9">
                    <Form user = {user}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Edit

