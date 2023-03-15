import express from "express";
import {
  createCategoryController,
  deleteCategoryController,
  getALLCategory,
  getSingleCategoryController,
  updateCategoryController,
} from "../controllers/categoryController.js";
import { isAdmin, requiredSignIn } from "../middlewares/authMiddleware.js";

// router object
const router = express.Router();

//routes
// create category
router.post(
  "/create-category",
  requiredSignIn,
  isAdmin,
  createCategoryController
);
// update category
router.put(
  "/update-category/:id",
  requiredSignIn,
  isAdmin,
  updateCategoryController
);

// GET ALL CATEGORY
router.get("/getall-category", getALLCategory);

// GET SINGLE CATEGORY
router.get("/single-category/:slug", getSingleCategoryController);

// delete category
router.delete(
  "/delete-category/:id",
  requiredSignIn,
  isAdmin,
  deleteCategoryController
);
export default router;
