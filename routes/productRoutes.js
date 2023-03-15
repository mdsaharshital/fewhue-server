import express from "express";
import {
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productPhotoController,
  updateProductController,
} from "../controllers/productController.js";
import { isAdmin, requiredSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";

// router object
const router = express.Router();

// routes || POST || CREATE PRODUCT
router.post(
  "/create-product",
  requiredSignIn,
  isAdmin,
  formidable(),
  createProductController
);

//get products
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete rproduct
router.delete(
  "/delete-product/:pid",
  requiredSignIn,
  isAdmin,
  deleteProductController
);

//routes
router.put(
  "/update-product/:pid",
  requiredSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

export default router;
