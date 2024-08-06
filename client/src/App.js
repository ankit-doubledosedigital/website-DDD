import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Image from './Components/Image';
import AboutUsPage from './Components/Aboutus';
import Login from './Components/Login';
import Register from './Components/Register';
import Contact from './Components/Contact';
import Privacy from './Components/Privacy';
import Video from './Components/Video';
import Audio from './Components/Audio';
import Text from './Components/Text';

const App = () => {
  const location = useLocation();
  const hideNavbarRoutes = ['/login', '/Register'];

  return (
    <div>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='/image' element={<Image />} />
        <Route path='/about' element={<AboutUsPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/video' element={<Video />} />
        <Route path='/audio' element={<Audio />} />
        <Route path='/text' element={<Text />} />
        {/* This line allows direct navigation to the Chatbot component */}
      </Routes>
      <Footer />
    </div>
  );
};

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
