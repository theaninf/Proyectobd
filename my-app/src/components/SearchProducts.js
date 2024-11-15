import React, { useState } from 'react';

const SearchProducts = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = () => {
    setLoading(true);
    fetch(`http://localhost:5000/api/search?q=${query}`)
      .then(response => response.json())
      .then(data => {
        setResults(data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error searching products.');
        setLoading(false);
      });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <h1>Búsqueda de Productos</h1>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Buscar productos..."
      />
      <button onClick={handleSearch}>Buscar</button>

      {loading && <p>Cargando resultados...</p>}
      {error && <p>{error}</p>}

      <ul>
        {results.map(product => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>Categoría: {product.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchProducts;