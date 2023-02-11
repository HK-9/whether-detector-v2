"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const products_1 = __importDefault(require("../model/products"));
const users_1 = __importDefault(require("../model/users"));
module.exports = {
    addproduct: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { name, image, description, price, discount, gst, category, subCategory } = req.body;
        try {
            //check if the user have admin access
            const adminId = req.body.decoded.id;
            const foundUser = yield users_1.default.findById(adminId);
            if (!foundUser)
                return res.send(401).json({ msg: "no authorization" });
            console.log("object", foundUser);
            // if (foundUser.role !== "user") {
            //   return res.status(401).json({ msg: "Unauthorized no admin access" });
            // }
            const newProduct = new products_1.default({ name, image, description, price, discount, gst, category, subCategory });
            yield newProduct.save();
            res.status(200).json({ status: 'product added successfully', data: newProduct });
        }
        catch (error) {
            console.log(error);
            res.status(400).json({ msg: error });
        }
    }),
    getallproducts: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const productsData = yield products_1.default.find().lean();
            console.log("object", productsData);
            res.status(200).json({ data: productsData });
        }
        catch (error) {
            console.log(error);
            res.status(400).json({ error });
        }
    }),
};
