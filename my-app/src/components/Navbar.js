import React from 'react';
import { Link } from 'react-router-dom'; // Link para la navegación entre rutas

const Navbar = () => {
  return (
    <nav style={navStyle}>
      <ul style={navListStyle}>
        {/* Enlaces de navegación */}
        <li style={navItemStyle}>
          <Link to="/" style={linkStyle}>Inicio</Link>
        </li>
        <li style={navItemStyle}>
          <Link to="/products" style={linkStyle}>Catálogo</Link> {/* Enlace al catálogo */}
        </li>
        <li style={navItemStyle}>
          <Link to="/cart" style={linkStyle}>Ver Carrito</Link>
        </li>
      </ul>
    </nav>
  );
};

// Estilos en línea para la barra de navegación
const navStyle = {
  backgroundColor: '#333',
  padding: '10px',
};

const navListStyle = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
};

const navItemStyle = {
  marginRight: '20px',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '18px',
};

export default Navbar;