import { useState, useEffect } from 'react';
import Navbar from './components/Navbar.js';
import './App.css';
import Footer from './components/Footer.js'
import Registration from './components/Registration.js';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div>
      <Navbar />
      <Footer />
      <Registration />
    </div>
    
  );
}

export default App;
