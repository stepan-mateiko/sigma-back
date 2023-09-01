const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
const path = require("path");
const { connectToDatabase } = require("./db");
const productApi = require("./productApi");
const orderApi = require("./orderApi");

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
