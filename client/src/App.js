// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
// import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Image from './Components/Image';
import AboutUsPage from './Components/Aboutus';
import Login from './Components/Login';
import Register from './Components/Register';
import Contact from './Components/Contact';
import Privacy from './Components/Privacy';
import Home from './Components/Home'
import { ToastContainer } from 'react-toastify';
import './Components/style/toastify-custom.css'
// import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        {/* <Nav /> */}
        <Navbar/>
        <ToastContainer/>
        
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/Image' element={<Image />} />
          <Route path='/About' element={<AboutUsPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Privacy' element={<Privacy />} />

        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
