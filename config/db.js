import mongoose from "mongoose";
import color from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONOGODB_URI);
    console.log(`connected to DB ${conn.connection.host}`.bgMagenta);
  } catch (error) {
    console.log(`error in mongodb ${error}`.bgRed.white);
  }
};
export default connectDB;
