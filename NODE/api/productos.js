// api/productos.js
import express from 'express';
import productos from './productos';

const router = express.Router();

router.get('/', async (req, res) => {
  const productos = await productos.obtenerTodosProductos();
  res.json(productos);
});

export default router;