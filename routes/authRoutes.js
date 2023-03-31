import express from "express";
import {
  adminLoginController,
  getLoggedUser,
  registerController,
  testController,
} from "../controllers/authController.js";
import { isAdmin, requiredSignIn } from "../middlewares/authMiddleware.js";

// router object
const router = express.Router();

// routing
// register || METHOD POST
router.post("/register", registerController);

// LOGIN || METHOD POST
router.post("/login", adminLoginController);

// GET LOGGED IN USER || METHOD GET
router.get("/getLoggedInUser", getLoggedUser);

// test || METHOD POST
router.post("/test", requiredSignIn, isAdmin, testController);

export default router;
