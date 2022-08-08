import React, { useState, useContext, useEffect } from 'react';
import {Routes, Route, useNavigate, Link} from 'react-router-dom';
import { UserContext } from './context/user-context';

import Main from "./pages/auth/Main"
import AddDrink from './pages/admin/Add-drink';
import DetailProduct from './pages/customer/Detail-product';
import Home from './pages/customer/Home';
import AddToping from './pages/admin/Add-topping';
import Profile from './pages/customer/Profile';
import Mycart from './pages/customer/Mycart';
import Transaction from './pages/admin/Transaction';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'


function App() {

  const moving = useNavigate()
  const [state,_] = useContext(UserContext)
  console.log(state);


  useEffect(() => {
    if(state.isLogin === false) {
      return moving('/Auth')
    }
    if(state.user.email === 'admin@mail.com') { 
      alert("Login Succes!")
      moving ('/transaction')
    } else if(state.user.email === "inggil@mail.com") {
      alert("Login Success!")
      moving('/')
    } else if(state.user.email === "fuad@mail.com") {
      alert("Login Success!")
      moving('/')
    } else if(state.isLogin === false) {
      alert('...')
    }
  },[state])
  
  library.add(fas)

  return (

  <Routes>
    <Route path='/auth' element={<Main/>}  />
    <Route path='/add-drink' element={<AddDrink/>}  />
    <Route path='/add-toping' element={<AddToping/>}  />
    <Route path='/detail-drink/:id' element={<DetailProduct/>}  />
    <Route path='/' element={<Home/>}  />
    <Route path='/profile' element={<Profile/>}  />
    <Route path='/mycart' element={<Mycart/>}  />
    <Route path='/transaction' element={<Transaction/>}  />
    
  </Routes>

  );
}

export default App; 