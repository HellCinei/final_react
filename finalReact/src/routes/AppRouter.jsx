import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Compras from '../pages/Compras'
import Sobre from '../pages/Sobre'
import Login from '../pages/Login'

export default function AppRouter() {
  return (
    <Routes >
        <Route path= '/' element={<Home/>}/>
        {/* <Route path= '/catalogo' element={<Catalogo/>}/> */}
        <Route path= '/compras' element={<Compras/>}/>
        <Route path= '/sobre' element={<Sobre/>}/>
        <Route path= '/login' element={<Login/>}/>
    </Routes>
  )
}
