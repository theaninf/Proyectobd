import React, { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product details:', error));
  }, [id]);

  if (!product) return <p>Cargando producto...</p>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Categoría: {product.category}</p>
      <p>Descripción: {product.description}</p>
      <button onClick={() => alert('Producto agregado al carrito')}>Agregar al carrito</button>
    </div>
  );
};

export default ProductDetails;