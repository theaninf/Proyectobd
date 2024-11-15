import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext'; // Importar el contexto

const Cart = () => {
  const { cartItems } = useContext(CartContext); // Obtener los productos del carrito

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  if (cartItems.length === 0) return <p>Tu carrito está vacío</p>;

  return (
    <div>
      <h1>Carrito de Compras</h1>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio total: ${item.price * item.quantity}</p>
          </li>
        ))}
      </ul>
      <h2>Total a pagar: ${totalPrice}</h2>
    </div>
  );
};

export default Cart;