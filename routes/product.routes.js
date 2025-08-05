const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");
const verifyToken = require("../middlewares/verifyToken");
const verifyAdmin = require("../middlewares/verifyAdmin");

router.post(
  "/product",
  verifyToken,
  verifyAdmin,
  productController.createProduct,
);
router.get("/products", productController.getAllProducts);

router.put(
  "/product/:id",
  verifyToken,
  verifyAdmin,
  productController.updateProduct,
);
router.get("/product/:id", productController.getProductById);

router.delete(
  "/product/:id",
  verifyToken,
  verifyAdmin,
  productController.deleteProduct,
);

module.exports = router;
