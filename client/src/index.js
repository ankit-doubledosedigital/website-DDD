import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// import * as serviceWorker from './serviceWorker';
// import { toast } from 'react-toastify';

// toast.configure();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <GoogleOAuthProvider clientId="873820722762-5l6i04scr31tdsp8pfr30cptjuh8hcqo.apps.googleusercontent.com">
    <App/>
  </GoogleOAuthProvider>
  
  // </React.StrictMode>
);


// serviceWorker.unregister();
