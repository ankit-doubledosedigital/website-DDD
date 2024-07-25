// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
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
  const hideFooterRoutes = ['/login', '/Register', '/Contact'];

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/Image' element={<Image />} />
        <Route path='/About' element={<AboutUsPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Privacy' element={<Privacy />} />
        <Route path='/Video' element={<Video />} />
        <Route path='/Audio' element={<Audio />} />
        <Route path='/Text' element={<Text />} />
      </Routes>
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
};

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
