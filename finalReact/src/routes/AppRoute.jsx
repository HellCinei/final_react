import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Compras from '../pages/Compras'
import Error from '../pages/Error'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Filme from '../pages/Filme'

export default function AppRoute() {
  return (
    <Routes >
        <Route path= '/compras/:id' element={<Compras/>}></Route>
        <Route path= '*' element={<Error/>}></Route>
        <Route path= '/filme' element={<Filme/>}></Route>
        <Route path= '/home' element={<Home/>}></Route>
        <Route path= '/login' element={<Login/>}></Route>
    </Routes>
  )
}
