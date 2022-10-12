import { useState, useEffect } from 'react';
import Navbar from './components/Navbar.js';
import logo from './logo.svg';
import './App.css';

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
      <h1>text</h1>
    </div>
    
  );
}

export default App;
