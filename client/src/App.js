import { useState, useEffect } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './Home.js';
import Navigation from './components/Navbar.js';
import Footer from './components/Footer.js'
import Registration from './components/users/Registration.js';
import Login from './components/users/Login.js';
import BooksList from './components/books/BooksList.js'
import CurrentUserProvider from './contexts/CurrentUser.js';
import BookDetail from './components/books/BookDetail';
import Find from './components/Find'
import Error404 from './Error404';

function App() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch('/api')
//       .then((res) => res.json())
//       .then((data) => setData(data.message));
//   }, []);

  return (

    <CurrentUserProvider>
      <BrowserRouter>
        <Navigation />
        
        
        <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/books" element={<BooksList/>}/>
          <Route path="/books/:book_id" element={<BookDetail/>}/>
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="*" element={<Error404/>}/>
        </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </CurrentUserProvider>
    
    
  );
}

export default App;
