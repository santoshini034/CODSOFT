import { useState } from 'react'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signin from './assets/pages/Signin'
import Login from './assets/pages/Login'
import Home from './assets/pages/Home'
import Create from './assets/pages/Create'
import Show from './assets/pages/Show'
import Account from './assets/pages/Account'
import Writer from './assets/pages/Writer'
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <div className='Layout'>
      <BrowserRouter>
        <Routes>
        <Route path='/' element = {<Home />} ></Route>
        <Route path='/create' element={<Create/>}></Route>
        <Route path='/show/:id' element={<Show/>}></Route>
        <Route path='/writer/:id' element={<Writer/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/account' element={<Account/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
