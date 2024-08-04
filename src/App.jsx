import React from 'react'
import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './pages/blog/Home'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import AddBlog from './pages/blog/AddBlog'
import Editblog from './pages/blog/Editblog'
import SingleBlog from './pages/blog/SingleBlog'
import {Provider} from 'react-redux'
import store from '../store/store'

function App() {
  return (
   <>
  <Provider store={store}>
    {/* now this <BrowserRouter> <Routes> <Route> are sents as a children so they can be accessible by the Providers i.e.store  if they are outside then they cann't be accessed by the provider*/}
  <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/blog/add' element={<AddBlog/>}></Route>
    <Route path='/blog/edit' element={<Editblog/>}></Route>
    <Route path='/blog/id' element={<SingleBlog/>}></Route>
   </Routes>
   </BrowserRouter>
  </Provider>
   </>
  )
}

export default App
