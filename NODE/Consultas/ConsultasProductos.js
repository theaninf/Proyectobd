import connectDB from '../database.js';

export default {
  obtenerTodosProductos,
  obtenerProductosSemillas,
  obtenerProductosHerramientas,
  obtenerProductosInsumos,
  obtenerProductosMayor100,
  crearProducto,
  obtenerProductosArboles

};

export async function obtenerTodosProductos(req, res) {
  try {
    const db = await connectDB();
    const productos = await db.collection('productos').find().toArray();
    return res.json(productos);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error al obtener todos los productos' });
  }
}

export async function obtenerProductosSemillas(req, res) {
    try {
      const db = await connectDB();
      const productos = await db.collection('productos').find({ "categoria.nombre_categoria": "Semillas" }).toArray();
      return res.json(productos);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error al obtener productos Semillas' });
    }
  }

export async function obtenerProductosHerramientas(req, res) {
    try {
      const db = await connectDB();
      const productos = await db.collection('productos').find({ "categoria.nombre_categoria": "Herramientas" }).toArray();
      return res.json(productos);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error al obtener productos Herramientas' });
    }
  }

export async function obtenerProductosInsumos(req, res) {
    try {
      const db = await connectDB();
      const productos = await db.collection('productos').find({ "categoria.nombre_categoria": "Insumos" }).toArray();
      return res.json(productos);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error al obtener productos Insumos' });
    }
  }

  export async function obtenerProductosArboles(req, res) {
    try {
      const db = await connectDB();
      const productos = await db.collection('productos').find({ "categoria.nombre_categoria": "Arboles" }).toArray();
      return res.json(productos);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error al obtener productos Arboles' });
    }
  }

  export async function obtenerProductosMayor100(req, res) {
  try {
    const db = await connectDB();
    const productos = await db.collection('productos').find({ precio: { $gte: 100 } }).toArray();
    return res.json(productos);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error al obtener productos mayor a 100' });
  }
}

export async function crearProducto(req, res) {
  try {
    const db = await connectDB();
    const producto = req.body;
    const resultado = await db.collection('productos').insertOne(producto);
    res.json({ mensaje: 'Producto creado con éxito', id: resultado.insertedId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al crear producto' });
  }
}



/*
Ejemplo POST

{
  "id": 1212,
  "nombre": "Producto nuevo",
  "descripcion": "Descripción del producto nuevo",
  "precio": 19.99
}


Ejemplo PUT

{
  "nombre": "Producto actualizado",
  "descripcion": "Descripción del producto actualizado",
  "precio": 29.99
}

Ejemplo DELETE
{
  "mensaje": "Producto eliminado con éxito"
}

*/