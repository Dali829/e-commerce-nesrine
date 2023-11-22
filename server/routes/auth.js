import express  from "express";
import { login, loginUser, registre } from "../controllers/auth.js";

const router = express.Router();

router.post("/register",registre)
router.post("/login",login)
router.post("/loginUser",loginUser)



export default router