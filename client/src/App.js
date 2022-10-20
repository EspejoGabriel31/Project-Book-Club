import { useState, useEffect } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './Home.js';
import Navigation from './components/Navbar.js';
import Footer from './components/Footer.js'
import Hero from './components/Hero.js'
import Dashboard from './components/Dashboard'
import Registration from './components/Registration.js';
import Login from './components/Login.js';
import BooksList from './components/BooksList.js'
import CurrentUserProvider from './contexts/CurrentUser.js';
import BookDetail from './components/BookDetail';

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
        <Navigation />
        <Hero />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/books" element={<BooksList/>}/>
          <Route path="/books/:book_id" element={<BookDetail/>}/>
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/login" element={<Login/>}/>
          
        </Routes>
        
        <Footer />
      </BrowserRouter>
    </CurrentUserProvider>
    
    
  );
}

export default App;
