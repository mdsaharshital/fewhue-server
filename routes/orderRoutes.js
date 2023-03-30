import express from "express";
import {
  getAllOrdersController,
  placeOrder,
} from "../controllers/orderController.js";
import { isAdmin, requiredSignIn } from "../middlewares/authMiddleware.js";

// router object
const router = express.Router();

// get all order(admin) || METHOD POST
router.get("/get-allorders", requiredSignIn, isAdmin, getAllOrdersController);
// place a order(user) || METHOD POST
router.post("/place-order", placeOrder);
// update order status || METHOD PUT
// code
export default router;
