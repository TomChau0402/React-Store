import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import footer from './components/footer';
import Catalog from './Pages/catalog';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Catalog></Catalog>
   
     <Footer></Footer>
    </div>
     );
}

export default App;
