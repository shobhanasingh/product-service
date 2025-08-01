require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("product- service is running ");
});
connectDB();

module.exports = app;
