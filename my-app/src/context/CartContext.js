import React, { createContext, useState } from 'react';

// Crear el contexto del carrito
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Función para agregar productos al carrito
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingProduct = prevItems.find(item => item.id === product.id);

      if (existingProduct) {
        // Si el producto ya está en el carrito, incrementa la cantidad
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Si es un producto nuevo, agregarlo al carrito
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};