import express from "express";
import {
  createOrder,
  getAllOrders,
  handleCheckOutSession,
} from "../controllers/OrderControllers.js";

const order_router = express.Router();

order_router.get("/", getAllOrders);
order_router.post("/create", createOrder);
order_router.post("/create-checkout-session", handleCheckOutSession);

order_router.post("/handle-stripe", async (req, res) => {
  res.status(200).json({ status_code: 200 });
});

export default order_router;
