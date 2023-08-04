import express from "express"
import morgan from "morgan"
import authRoutes from "../src/routes/auth.routes.js";

const app= express();

app.use(morgan("dev"));
app.use(express.json())//lo instale para que el req body lo tansforme a json y se pueda mostrar
app.use("/api",authRoutes)//conexion para usar con el front y poder identificarla

export default app;
