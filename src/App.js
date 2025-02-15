import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import footer from './components/footer';
import Catalog from './Pages/catalog';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";
import Footer from './components/footer';
import About from './Pages/About';
import Admin from './Pages/Admin';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import GlobalProvider from './state/globalProvider';


function App() {
  return (
    <GlobalProvider>
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>

        <Routes>
          <Route path="/catalog" element={<Catalog></Catalog>}></Route>
          <Route path="/admin" element={<Admin></Admin>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/Home" element={<Home></Home>}></Route>
          <Route path="/Home" element={<Home></Home>}></Route>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/Cart" element={<Cart></Cart>}></Route>
        </Routes>

        <Footer></Footer>
      </div>
    </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
