// import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Filme from '../pages/Filme'

export default function AppRoute() {
  return (
    <Routes >
        <Route path= '/filme' element={<Filme/>}></Route>
    </Routes>
  )
}
