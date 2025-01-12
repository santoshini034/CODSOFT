import { useState } from 'react'
import '../index.css'
import Home from './home/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Create from './create/Create'
import Liked from './Liked/Liked'
import Watch from './watchLater/Watch'
import Your from './yourPost/Your'
import Show from './show/Show'
import Edit from './edit/Edit'
import Signup from './User/Signup'
import Login from './User/Login'
import Account from './Account'


function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/create' element={<Create/>}></Route>
      <Route path='/liked' element={<Liked/>}></Route>
      <Route path='/watchlater' element={<Watch/>}></Route>
      <Route path='/yourpost' element={<Your/>}></Route>
      <Route path='/show' element={<Show/>}></Route>
      <Route path='/edit' element={<Edit/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/account' element={<Account/>}></Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App
