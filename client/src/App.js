import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './Home.js';
import Navigation from './components/Navbar.js';
import Footer from './components/footers/Footer.js'
import BooksList from './components/books/BooksList.js'
import CurrentUserProvider from './contexts/CurrentUser.js';
import BookDetail from './components/books/BookDetail';
import Error404 from './Error404';
//FOOTERS components
import About from '../src/components/footers/about'
import Contact from '../src/components/footers/contact'
import Term from '../src/components/footers/terms'
import Privacy from '../src/components/footers/privacy'

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
          <Route path="/book" element={<BooksList/>}/>
          <Route path="/book/:book_id" element={<BookDetail/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/term" element={<Term/>}/>
          <Route path="/privacy" element={<Privacy/>}/>
          <Route path="*" element={<Error404/>}/>
        </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </CurrentUserProvider>
    
    
  );
}

export default App;
