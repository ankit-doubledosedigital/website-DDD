// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
  return (
    <BrowserRouter>
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
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
