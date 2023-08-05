import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { createService, deleteService, getService, getServices, updateService } from "../controllers/service.controller.js";

const router= Router()

router.get("/services", authRequired ,getServices);//pedir todos
router.get("/service/:id", authRequired, getService );//pedir uno
router.post("/newservice", authRequired, createService );//publicar
router.delete("/deleteservice/:id", authRequired , deleteService);//eliminar
router.put("/updateservice/:id", authRequired , updateService);//editar

export default router