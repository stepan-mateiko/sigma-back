require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const { connectToDatabase } = require("./db/db");
const productApi = require("./api/productApi");
const orderApi = require("./api/orderApi");

const port = process.env.PORT || 5050;
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(productApi);
app.use(orderApi);

async function startServer() {
  await connectToDatabase();
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

startServer();
