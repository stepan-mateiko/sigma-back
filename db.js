const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://uchihayankee:Walinor99@cluster0.aim8grx.mongodb.net/?retryWrites=true&w=majority";
// const uri = 'mongodb://localhost:27017/Sigma'

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}
async function getProductList() {
  const database = client.db("Sigma");
  const productList = database.collection("ProductList");

  try {
    const products = await productList.find({}).toArray();
    return products;
  } catch (error) {
    console.error("Error fetching product list:", error);
    throw error;
  }
}
async function addOrderToDatabase(orderData) {
  const database = client.db("Sigma");
  const orders = database.collection("Orders");

  try {
    const result = await orders.insertOne(orderData);
    console.log("Order added:", result);
  } catch (error) {
    console.error("Error adding order:", error);
    throw error;
  }
}
async function getOrders() {
  const database = client.db("Sigma");
  const orders = database.collection("Orders");

  try {
    const ordersList = await orders.find({}).toArray();
    return ordersList;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
}
module.exports = {
  client,
  connectToDatabase,
  getProductList,
  addOrderToDatabase,
  getOrders,
};
