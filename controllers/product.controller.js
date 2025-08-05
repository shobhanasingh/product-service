const Product_schema = require("../models/product.model");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product_schema.find();
    res.status(200).json(products);
  } catch (e) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.createProduct = async (req, res) => {
  const { name, description, price, category, image, stock, createdAt } =
    req.body;

  try {
    const newProduct = await Product_schema.create({
      name,
      description,
      price,
      category,
      image,
      stock,
      createdAt,
    });
    return res.status(201).json("Product Created successfully!");
  } catch (e) {
    res.status(500).send("Server Error!");
  }
};

exports.getProductById = async (req, res) => {
  const productId = req.params.id;
  console.log(productId);
  try {
    const product = await Product_schema.findById({ _id: productId });
    res.status(200).json({ product });
  } catch (e) {
    res.status(500).json({ message: "Server Error!", e });
  }
};

exports.updateProduct = async (req, res) => {
  const prodId = req.params.id;
  //const { name, description, price, category, image, stock, createdAt } =
  //req.body;
  try {
    const updatedProd = await Product_schema.findByIdAndUpdate(
      { _id: prodId },
      req.body,
      { new: true },
    );
    res.status(201).json({ updatedProd });
  } catch (err) {
    res.status(500).json({ message: "Server Error!" });
  }
};

exports.deleteProduct = async (req, res) => {
  const prodId = req.params.id;
  try {
    await Product_schema.findByIdAndDelete({
      _id: prodId,
    });
    return res
      .status(200)
      .json({ message: "Product has been successfully deleted" });
  } catch (e) {
    res.status(500).json({ message: "Server Error!!" });
  }
};
