import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
// import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Image from './Components/Image';
import AboutUsPage from './Components/Aboutus';
import Login from './Components/Login';
import Register from './Components/Register';
import Contact from './Components/Contact';
import Privacy from './Components/Privacy';
import Home from './Components/Home';
import Text from './Components/Text';
import Video from './Components/Video';
import Audio from './Components/Audio';
import { ToastContainer } from 'react-toastify';
import './Components/style/toastify-custom.css';
import AccountInfo from './Components/Account-info';
// In your main JS file (e.g., index.js or App.js);
import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
};

const Main = () => {
  const location = useLocation();
  const hideNavbar = location.pathname !== '/' && location.pathname !== '/register'   ;

  return (
    <div>
      {hideNavbar && <Navbar />}
      <ToastContainer />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/Image' element={<Image />} />
        <Route path='/About' element={<AboutUsPage />} />
        <Route path='/' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Privacy' element={<Privacy />} />
        <Route path='/Text' element={<Text />} />
        <Route path='/Video' element={<Video />} />
        <Route path='/Audio' element={<Audio />} />
        <Route path='/AccountInfo' element={<AccountInfo />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

