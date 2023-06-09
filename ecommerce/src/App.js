import './App.css';
import Header from './Header.js'
import Footer from './Footer.js'
import HomePage from './HomePage';
import ProductPage from './ProductPage.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './Cart';
import Form from './Form';


function App() {
  return (
    <div className="App">
        
        
        <BrowserRouter>
        <Header></Header>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/createForm" element={<Form />} />
            </Routes>
        </BrowserRouter>

        <Footer></Footer>
    </div>
  );
}

export default App;
