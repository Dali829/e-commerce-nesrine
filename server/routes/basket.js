import express  from "express";
import { createBasket, deleteBasket, getAllBasket, getBasket, updateBasket } from "../controllers/basket.js";

const router = express.Router();

router.post("/",createBasket);

router.put("/:id",updateBasket);

router.delete("/:id",deleteBasket);

router.get("/:id",getBasket);

router.get("/",getAllBasket);


export default router