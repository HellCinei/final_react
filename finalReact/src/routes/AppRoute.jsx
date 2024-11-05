import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Filme from '../pages/Filme'
import Posts from '../pages/Posts'
import Update from '../pages/Update'
import More from '../pages/Catalogo'

export default function AppRoute() {
  return (
    <Routes >
        <Route path='/' element={<Feed/>} > </Route>
        <Route path='/posts' element={<Posts/>} > </Route>
        <Route path='/update/:id' element={<Update/>} > </Route>
        <Route path='/more/:id' element={<More/>} > </Route>
        <Route path='*' element={<Error/>} > </Route>
    </Routes>
  )
}
