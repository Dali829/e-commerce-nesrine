import express  from "express";
import { createProduct, deleteProduct, getAllProduct, getProduct, updateProduct } from "../controllers/product.js";

const router = express.Router();

router.post("/",createProduct);

router.put("/:id",updateProduct);

router.delete("/:id",deleteProduct);

router.get("/:id",getProduct);

router.get("/",getAllProduct);


export default router