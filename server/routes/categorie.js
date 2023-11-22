import express  from "express";
import { createCategorie, deleteCategorie, getAllCategorie, getCategorie, updateCategorie } from "../controllers/categorie.js";

const router = express.Router();

router.post("/",createCategorie);

router.put("/:id",updateCategorie);

router.delete("/:id",deleteCategorie);

router.get("/:id",getCategorie);

router.get("/",getAllCategorie);


export default router