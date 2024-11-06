import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/Global.css';
import App from './App.jsx';
import Header from './components/Header/index.jsx';
import Footer from './components/Footer/index.jsx';
import Home from './pages/Home/index.jsx';
import Carousel from './components/Carousel/index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
