import React from 'react'
 import './index.css'
import UserList from './ListOf User'
import { Route, Routes } from 'react-router-dom'
import AddUser from './AddUser'
import { NavLink } from 'react-router-dom'

const App = () => {
  return (
    <div >
     
    
     <Routes>
      <Route path='/' element={<UserList/>} />
      <Route path='/add' element={<AddUser/>} />
     </Routes>
     <ul className='nav-list'>
      <li>
        <NavLink to="/">List</NavLink>
       
      </li>
      <li>
         <NavLink to="/add">ADD User</NavLink>
       </li>
     </ul>
    </div>
  )
}

export default App