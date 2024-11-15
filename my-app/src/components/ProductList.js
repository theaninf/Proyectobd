import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../context/CartContext'; // Importar el contexto
import mockProducts from './mockData'; // Importa los datos simulados

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const { addToCart } = useContext(CartContext); // Obtener la función para agregar al carrito

  useEffect(() => {
    setProducts(mockProducts);
  }, []);

  //useEffect(() => {
    // Aquí usaremos productos de ejemplo
  //  fetch('http://localhost:5000/api/products') 
  //    .then(response => response.json())
  //    .then(data => setProducts(data))
  //    .catch(error => console.error('Error fetching products:', error));
  //}, []);
  

  // Obtener categorías únicas
  const categories = [...new Set(products.map(product => product.category))];

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <div>
      <h1>Lista de Productos</h1>

      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Todas las categorías</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>

      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>Categoría: {product.category}</p>
            <p>Precio: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Agregar al Carrito</button> {/* Botón para agregar al carrito */}
          </li>
          
        ))}
      </ul>
    </div>
  );
};

export default ProductList;