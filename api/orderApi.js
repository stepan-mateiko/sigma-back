const express = require("express");
const router = express.Router();
const { addOrderToDatabase, getOrders, deleteOrder } = require("../db/db");

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

router.delete("/api/orders/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await deleteOrder(id);
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting order" });
  }
});

module.exports = router;
