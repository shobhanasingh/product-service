const Product_schema = require("../models/product.model");

exports.getAllProducts = async (req, res) => {
  const { category } = req.query;
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;
  const skip = (page - 1) * limit;
  try {
    let filter = {};
    if (category) {
      filter.category = category;
    }
    const totalItems = await Product_schema.countDocuments();
    const products = await Product_schema.find(filter).limit(limit).skip(skip);

    res.status(200).json({
      TotalPages: Math.ceil(totalItems / limit),
      totalItems: totalItems,
      currentPage: page,
      products,
    });
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
    return res
      .status(201)
      .json({ message: "Product Created successfully!", product: newProduct });
  } catch (e) {
    res.status(500).send("Server Error!");
  }
};

exports.getProductById = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await Product_schema.findById(productId);
    res.status(200).json({ product });
  } catch (e) {
    res.status(500).json({ message: "Server Error!", e });
  }
};

exports.updateProduct = async (req, res) => {
  const prodId = req.params.id;
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
