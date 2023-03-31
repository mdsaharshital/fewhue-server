import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    products: {
      type: [
        {
          name: String,
          price: Number,
          quantity: Number,
        },
      ],
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    orderNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      index: { unique: false },
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
      min: 1,
    },
    role: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      default: "Not Process",
      enum: ["Not Process", "Processing", "Shipped", "deliverd", "cancel"],
    },
  },
  { timestamps: true }
);
export default mongoose.model("Order", orderSchema);
