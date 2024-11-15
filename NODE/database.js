import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/rincon_campestre2');
    return mongoose.connection;
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    throw error;
  }
};

export default connectDB;

connectDB();
