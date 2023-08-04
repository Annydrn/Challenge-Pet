import app from "./app.js";
import connectDB from "./db.js"


connectDB();
app.listen(3300, '127.0.0.1', () => {
    console.log('Servidor en el puerto 3300');
  });


