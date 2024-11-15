import React from 'react';
import burroImage from '../images/burro.jpeg';

const Home = () => {
  return (
    <div className="home">
      <h1>Bienvenido a Rincón Campestre</h1>
      <p>Tu tienda de confianza para todo lo relacionado con la agricultura y jardinería.</p>

      {/* Imagen representativa */}
      <img src={burroImage} alt="Rincón Campestre" />

      {/* Información adicional */}
      <div className="info">
        <h2>Nuestra Tienda</h2>
        <p>En Rincón Campestre encontrarás una amplia selección de semillas, árboles, herramientas y más para hacer que tu huerto.</p>
        
        <h2>Categorías Destacadas</h2>
        <ul>
          <li>Semillas</li>
          <li>Árboles</li>
          <li>Insumos Básicos</li>
        </ul>
      </div>

      {/* Botón para ir a la tienda */}
      <button 
        onClick={() => window.location.href='/products'}
        style={{ padding: '10px 20px', fontSize: '16px', marginTop: '20px' }}
      >
        Ver Catálogo de Productos
      </button>
    </div>
  );
};

export default Home;