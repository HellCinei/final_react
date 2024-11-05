import React from 'react';
import Login from './pages/Login';
import { BrowserRouter } from 'react-router-dom'
import AppRoute from './routes/AppRoute';

export default function App() {
  return (
    <div>
     <BrowserRouter>
      <AppRoute/>
    </BrowserRouter>
    </div>
  )
}
