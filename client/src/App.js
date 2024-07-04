// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Image from './Components/Image';
import AboutUsPage from './Components/Aboutus';
import Login from './Components/Login';
import Register from './Components/Register';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path='/Image' element={<Image />} />
          <Route path='/About' element={<AboutUsPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/Register' element={<Register/>} />

        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
