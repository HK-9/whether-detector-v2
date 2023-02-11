"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const productController_1 = __importDefault(require("../controllers/productController"));
//SuperAdmin
//Admin
router.post('/addproduct', productController_1.default.addproduct);
router.get('/getallproducts', productController_1.default.getallproducts);
router.get('/addtocart');
router.get('/getallcart');
//client
exports.default = router;
