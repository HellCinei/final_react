import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Compras from '../pages/Compras'
import Sobre from '../pages/Sobre'
import Login from '../pages/Login'
import Catalogo from '../pages/Catalogo'
import Config from '../pages/Config'
import AdicionarFilme from '../pages/AdicionarFilme.jsx'

export default function AppRouter() {
  return (
    <Routes >
        <Route path= '/' element={<Home/>}/>
        <Route path= '/catalogo' element={<Catalogo/>}/>
        <Route path='/catalogo/:id' element={<Catalogo/>}/>
        <Route path= '/config' element={<Config/>}/>
        <Route path= '/config/:id' element={<Config/>}/>
        <Route path= '/compras' element={<Compras/>}/>
        <Route path= '/adicionarfilme' element={<AdicionarFilme/>}/>
        <Route path= '/sobre' element={<Sobre/>}/>
        <Route path= '/login' element={<Login/>}/>
    </Routes>
  )
}
