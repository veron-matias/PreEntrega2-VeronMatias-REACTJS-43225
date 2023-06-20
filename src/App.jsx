import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Greeting from './components/ItemListContainer/Greeting';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

//PAGES
import Products from './components/Pages/Products/Products';
import Error from './components/Pages/Error/Error';
import ProductsDetails from "./components/Pages/ProductsDetails/ProductsDetails";
import Contact from "./components/Pages/Contact/Contact";
import Home from './components/Pages/Home/Home';

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>
      <Header/>
      <Routes>
        <Route path= "/" element={<Home/>} />
        <Route path= "/products" element={<Products />} />
        <Route path= "/ProductsDetails/:id" element={<ProductsDetails />} />
        <Route path= "/Contact" element={<Contact />} />
        <Route path= "*" element={<Error />} />
      </Routes>
      <Footer/>
    </div>
    </Router>  
  );
}

export default App;
