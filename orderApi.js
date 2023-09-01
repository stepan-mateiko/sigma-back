const express = require("express");
const router = express.Router();
const { addOrderToDatabase, getOrders } = require("./db");

router.post("/api/orders", async (req, res) => {
  try {
    const orderData = req.body.order;
    await addOrderToDatabase(orderData);
    res.status(201).json({ message: "Order added successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error adding order" });
  }
});

router.get("/api/orders", async (req, res) => {
  try {
    const orders = await getOrders();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Error fetching orders" });
  }
});

module.exports = router;
