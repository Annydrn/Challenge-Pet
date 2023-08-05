import { Router } from "express";
import {
  login,
  signup,
  logout,
  profile,
} from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { loginSchema, signUpSchema } from "../schemas/auth.schema.js";


const router = Router();

router.post("/signup", validateSchema(signUpSchema), signup);
router.post("/login",validateSchema(loginSchema) ,login);
router.post("/logout", logout);
router.get("/profile",authRequired, profile);

export default router;
