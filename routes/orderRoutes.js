import express from "express";
import {
  getAllOrdersController,
  placeOrder,
} from "../controllers/orderController.js";
import { isAdmin, requiredSignIn } from "../middlewares/authMiddleware.js";

// router object
const router = express.Router();

// test || METHOD POST
router.get("/get-allorders", requiredSignIn, isAdmin, getAllOrdersController);
// test || METHOD POST
router.post("/place-order", placeOrder);

export default router;
