const express = require("express");
const router = express.Router();
const { getProductList } = require("./db");

router.get("/api/products", async (req, res) => {
  try {
    const products = await getProductList();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Error fetching products" });
  }
});

module.exports = router;
