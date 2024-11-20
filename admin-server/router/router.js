const express = require("express");
const { adminLogin } = require("../controllers/auth");
const dataController = require("../controllers/allDataController");
const { upload } = require("../config/aws");
const { createProducts, allProducts, editProduct, deleteProduct } = require("../controllers/productController");
const { createTime,allTime,deleteTime } = require("../controllers/slot");
const router = express.Router();

// Admin login
router.post("/login", adminLogin);

// User routes
router.get("/users", dataController.users);

// Service CRUD operations
router.get("/all_services", dataController.allservice);
router.post("/createservice", upload.single("image"), dataController.createService);
router.post("/editservice", upload.single("image"), dataController.editservice);
router.delete("/deleteservice", dataController.deleteService);

// Product CRUD operations
router.post("/createProduct", upload.single("image"), createProducts);
router.get("/allProduct", allProducts);
router.post("/editProduct", upload.single("image"), editProduct);
router.delete("/deleteProduct", deleteProduct);

// Time slot routes
router.post("/createTime", createTime);
router.get("/allTime", allTime);
router.delete("/deleteTime", deleteTime);

module.exports = router;
