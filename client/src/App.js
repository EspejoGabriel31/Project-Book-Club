import { useState, useEffect } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js'
import './App.css';
import Home from './Home.js';

import Registration from './components/Registration.js';
import Login from './components/Login.js';
import CurrentUserProvider from './contexts/CurrentUser.js';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (

    <CurrentUserProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" component={Home}/>
          <Route exact path="/registration" component={Registration}/>
          <Route exact path="/login" component={Login}/>

        </Routes>
        <Footer />
      </BrowserRouter>
    </CurrentUserProvider>
    
    
  );
}

export default App;
