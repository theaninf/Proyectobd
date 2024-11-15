import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../context/CartContext'; // Importar el contexto del carrito
//import axios from 'axios'; // Importar axios para hacer las solicitudes HTTP
import mockProducts from './mockData'; // Importa los datos simulados

const ProductList = () => {
  const [products, setProducts] = useState([]); // Estado para almacenar los productos de la API
  const [selectedCategory, setSelectedCategory] = useState(''); // Filtro de categoría
  const [selectedPriceRange, setSelectedPriceRange] = useState(''); // Filtro de precio
  const [sortOrder, setSortOrder] = useState(''); // Ordenar por precio
  const { addToCart } = useContext(CartContext); // Obtener la función para agregar al carrito

  // Obtener productos desde la API al montar el componente
  //useEffect(() => {
  //  axios.get('http://localhost:3000/productos') // Cambia la URL según tu backend
  //    .then(response => {
  //      console.log('Datos obtenidos del backend:', response.data);
  //      setProducts(response.data); // Almacenar los productos recibidos en el estado
  //    })
  //    .catch(error => {
  //      console.error('Error al obtener productos:', error);
  //    });
  //}, []);

  useEffect(() => {
    setProducts(mockProducts);
  }, []);

  // Obtener categorías únicas de los productos
  const categories = [...new Set(products.map(product => product.category))];

  // Manejar cambio de categoría seleccionada
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Manejar cambio de rango de precio seleccionado
  const handlePriceChange = (event) => {
    setSelectedPriceRange(event.target.value);
  };

  // Manejar cambio de orden de precios
  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  // Filtrar y ordenar los productos
  const filteredProducts = products
    .filter(product => {
      // Filtro por categoría
      const categoryMatch = selectedCategory ? product.category === selectedCategory : true;

      // Filtro por rango de precio
      let priceMatch = true;
      if (selectedPriceRange === '<50') {
        priceMatch = product.price < 50;
      } else if (selectedPriceRange === '<100') {
        priceMatch = product.price < 100;
      } else if (selectedPriceRange === '<200') {
        priceMatch = product.price < 200;
      }

      // Retornar productos que coinciden con ambos filtros
      return categoryMatch && priceMatch;
    })
    // Ordenar los productos por precio
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.price - b.price; // Orden ascendente
      } else if (sortOrder === 'desc') {
        return b.price - a.price; // Orden descendente
      }
      return 0; // No ordenar si no se ha seleccionado un orden
    });

  return (
    <div>
      <h1>Lista de Productos</h1>

      {/* Filtro de Categoría */}
      <label htmlFor="category">Categoría:</label>
      <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Todas las categorías</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>

      {/* Filtro de Precio */}
      <label htmlFor="price">Precio:</label>
      <select id="price" value={selectedPriceRange} onChange={handlePriceChange}>
        <option value="">Todos los precios</option>
        <option value="<50">Menos de $50</option>
        <option value="<100">Menos de $100</option>
        <option value="<200">Menos de $200</option>
      </select>

      {/* Ordenar por Precio */}
      <label htmlFor="sortOrder">Ordenar por precio:</label>
      <select id="sortOrder" value={sortOrder} onChange={handleSortOrderChange}>
        <option value="">Seleccionar</option>
        <option value="asc">Precio: de menor a mayor</option>
        <option value="desc">Precio: de mayor a menor</option>
      </select>

      {/* Lista de productos */}
      <ul>
        {filteredProducts.map(product => (
          <li key={product._id}>
            <h2>{product.name}</h2>
            <p>Categoría: {product.category}</p>
            <p>Precio: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;