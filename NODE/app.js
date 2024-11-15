import express from 'express';
import connectDB from './database.js';
import consultasProductos from './Consultas/ConsultasProductos.js';
import cors from 'cors';

const app = express();
const port = 3000;

(async () => {
  try {
    const db = await connectDB();
    console.log('Mongoose está conectado');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
})();
app.use(cors());
app.use(express.json());


app.get('/productos', consultasProductos.obtenerTodosProductos);
app.get('/productos/semillas', consultasProductos.obtenerProductosSemillas);
app.get('/productos/herramientas', consultasProductos.obtenerProductosHerramientas);
app.get('/productos/insumos', consultasProductos.obtenerProductosInsumos);
app.get('/productos/arboles', consultasProductos.obtenerProductosArboles);
app.get('/productos-mayor-100', consultasProductos.obtenerProductosMayor100);
app.post('/productos', consultasProductos.crearProducto);



app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});


