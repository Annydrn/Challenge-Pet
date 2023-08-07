import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  createService,
  deleteService,
  getService,
  getServices,
  updateService,
} from "../controllers/service.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createServiceSchema } from "../schemas/service.schema.js";

const router = Router();

router.get("/services", authRequired, getServices); //pedir todos
router.get("/service/:id", authRequired, getService); //pedir uno
router.post(
  "/service",
  authRequired,
  validateSchema(createServiceSchema),
  createService
); //publicar
router.delete("/service/:id", authRequired, deleteService); //eliminar
router.put("/service/:id", authRequired, updateService); //editar


export default router;
