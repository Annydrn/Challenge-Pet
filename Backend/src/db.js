import mongoose from "mongoose";

async function connectDB() {
  try {
    await mongoose.connect("mongodb://127.0.0.1/merndb");
    console.log("la base de datos esta conectada");
  } catch (error) {
    console.log(error);
  }
}

export default connectDB;
