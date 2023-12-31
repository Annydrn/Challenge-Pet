import express from "express";
import morgan from "morgan";
import authRoutes from "../src/routes/auth.routes.js";
import cookieParser from "cookie-parser";
import serviceRoutes from "./routes/service.routes.js";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(express.json()); //lo instale para que el req body lo tansforme a json y se pueda mostrar
app.use(cookieParser());

app.use("/api", authRoutes); //conexion para usar con el front y poder identificarla
app.use("/api", serviceRoutes);

export default app;
