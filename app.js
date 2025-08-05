require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");
const productRoutes = require("./routes/product.routes");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("product- service is running ");
});
connectDB();
app.use("/", productRoutes);

module.exports = app;
