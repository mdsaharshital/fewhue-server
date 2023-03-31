import express from "express";
import {
  getAllOrdersController,
  orderStatusController,
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
// order status update
router.put(
  "/order-status/:orderId",
  requiredSignIn,
  isAdmin,
  orderStatusController
);
// code
export default router;
