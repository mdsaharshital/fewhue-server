import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import path from "path";
// import { fileURLToPath } from "url";

//configure env
dotenv.config();

//databse config
connectDB();

//rest object
const app = express();
// esmodule fix
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

//----- middleware -----
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
// app.use(express.static(path.join(__dirname, "../fewhew-frontend/build")));

// routes
app.use("/auth", authRoutes);
app.use("/product", productRoutes);
app.use("/category", categoryRoutes);

//rest api
app.use("/", function (req, res) {
  // res.sendFile(path.join(__dirname, "../fewhew-frontend/build/index.html"));
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
