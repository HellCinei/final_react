import React from 'react'
import {Routes, Route} from 'react-router-dom'
// import More from '../pages/Catalogo'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Sobre from '../components/Sobre'

export default function AppRoute() {
  return (
    <Routes >
        <Route path='/' element={<Home/>} > </Route>
        <Route path='/login' element={<Login/>} > </Route>
        <Route path='/sobre' element={<Sobre/>} > </Route>
        <Route path='*' element={<Error/>} > </Route>
    </Routes>
  )
}
