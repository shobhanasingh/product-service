const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");
//const verifyToken = require("../middlewares/verifyToken");

router.post("/product", productController.createProduct);
router.get("/products", productController.getAllProducts);
router.put("/product/:id", productController.updateProduct);
router.get("/product/:id", productController.getProductById);
router.delete("/product/:id", productController.deleteProduct);

module.exports = router;
