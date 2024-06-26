import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import path from "path";
// import { fileURLToPath } from "url";

//configure env
dotenv.config();

//databse config
connectDB();

//rest object
const app = express();

//----- middleware -----
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/auth", authRoutes);
app.use("/api/product", productRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/order", orderRoutes);

//rest api
app.use("/", function (req, res) {
  res.send("fewhue server");
});

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});

export default app;
