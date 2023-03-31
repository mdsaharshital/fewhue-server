import dotenv from "dotenv";
import orderModel from "../models/orderModel.js";

dotenv.config();

export const placeOrder = async (req, res) => {
  const { products, name, phone, email, address, totalPrice, orderNumber } =
    req.body;
  console.log("", req.body);
  // Validation
  switch (true) {
    case !name:
      return res.status(500).send({ error: "Name is Required" });
    case !products:
      return res.status(500).send({ error: "products is Required" });
    case !phone:
      return res.status(500).send({ error: "phone is Required" });
    case !email:
      return res.status(500).send({ error: "email is Required" });
    case !address:
      return res.status(500).send({ error: "address is Required" });
    case !totalPrice:
      return res.status(500).send({ error: "totalPrice is Required" });
    case !orderNumber:
      return res.status(500).send({ error: "orderNumber is Required" });
  }
  const order = new orderModel({
    products,
    name,
    phone,
    email,
    address,
    totalPrice,
    orderNumber,
  });

  try {
    await order.save();
    return res.status(201).send({
      success: true,
      message: "Order placed successfully",
      order,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ error: "Failed to place order" });
  }
};

//orders
export const getAllOrdersController = async (req, res) => {
  try {
    console.log("de", req.user);
    if (!req.user) {
      return res.status(500).send({
        success: false,
        message: "Unauthorized admin",
        error,
      });
    }
    const orders = await orderModel
      .find({})
      // .populate("cart", "-photo")
      .sort({ createdAt: "-1" });
    res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error WHile Geting Orders",
      error,
    });
  }
};
