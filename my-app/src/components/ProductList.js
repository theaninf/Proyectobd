import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../context/CartContext'; // Importar el contexto
import mockProducts from './mockData'; // Importa los datos simulados

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState(''); // Estado para el filtro de precios
  const [sortOrder, setSortOrder] = useState(''); // Estado para el orden de precio
  const { addToCart } = useContext(CartContext); // Obtener la función para agregar al carrito

  useEffect(() => {
    setProducts(mockProducts);
  }, []);

  // Obtener categorías únicas
  const categories = [...new Set(products.map(product => product.category))];

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handlePriceChange = (event) => {
    setSelectedPriceRange(event.target.value);
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value); // Actualizar el estado del orden de precio
  };

  // Lógica para filtrar los productos por categoría y precio
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

      // Retorna productos que coinciden con ambos filtros
      return categoryMatch && priceMatch;
    })
    // Lógica para ordenar los productos por precio
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