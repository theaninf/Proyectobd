import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import SearchProducts from './components/SearchProducts';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Home from './components/Home'; // Importa la nueva página de inicio

import { CartProvider } from './context/CartContext';

const App = () => {
  return (
    <CartProvider>
      <Router>
        {/* Barra de navegación */}
        <Navbar />

        {/* Definición de las rutas */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Página de inicio */}
          <Route path="/products" element={<ProductList />} /> {/* Catálogo de productos */}
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/search" element={<SearchProducts />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;