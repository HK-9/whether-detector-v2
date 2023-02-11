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
const users_1 = __importDefault(require("../model/users"));
const enquiry_1 = __importDefault(require("../model/enquiry"));
const products_1 = __importDefault(require("../model/products"));
module.exports = {
    createAdmin: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            // Check if the user making the request is a super admin
            const adminId = req.body.decoded.id;
            const foundSuperAdmin = yield users_1.default.findById(adminId);
            if (!foundSuperAdmin)
                return res.send(401).json({ msg: "no authorization" });
            console.log("object", foundSuperAdmin);
            if (foundSuperAdmin.role !== "super-admin") {
                return res.status(401).json({ msg: "Unauthorized" });
            }
            //check if new admin is already exists
            const { username, email, password, role } = req.body;
            if (!username || !email || !password || !role)
                return res.status(401).json({ msg: "all fields require" });
            const foundAdmin = yield users_1.default.findOne({ username, email }).exec();
            if (foundAdmin)
                return res.status(402).json({ msg: "admin already exists" });
            const newAdmin = new users_1.default({ username, password, email, role });
            const savedAdmin = yield newAdmin.save();
            res
                .status(200)
                .json({ msg: "user successfully created", data: savedAdmin });
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ msg: "Error creating admin user", err: err });
        }
    }),
    viewAdmin: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const adminId = req.body.decoded.id;
            const foundSuperAdmin = yield users_1.default.findById(adminId);
            if (!foundSuperAdmin)
                return res.send(401).json({ msg: "no authorization" });
            if (foundSuperAdmin.role !== "super-admin") {
                return res.status(401).json({ msg: "Unauthorized" });
            }
            const adminData = users_1.default.find().lean();
            res.status(200).send(adminData);
        }
        catch (error) {
            console.log(error);
            res.send(400).json({ msg: error });
        }
    }),
    getAllEnquiry: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let enquiries = yield enquiry_1.default.find().lean();
            res.status(200).json({ data: enquiries });
        }
        catch (error) {
            res.status(400).json({ err: error });
            console.log(error);
        }
    }),
    approveEnquiry: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const enquiryId = req.body.equiryId;
            if (!enquiryId)
                res.status(401).json({ status: 'fail', msg: 'equiry Id not found' }).end();
            let newEnquiry = yield enquiry_1.default.findById(enquiryId);
            const productId = newEnquiry === null || newEnquiry === void 0 ? void 0 : newEnquiry.product;
            const foundproduct = yield products_1.default.findById(productId).populate("product");
            console.log("2222222222222222222222222222", foundproduct);
            if (newEnquiry === null || newEnquiry === void 0 ? void 0 : newEnquiry.status) {
                newEnquiry.status = 'approved';
            }
            newEnquiry === null || newEnquiry === void 0 ? void 0 : newEnquiry.save();
            res.status(200).json({ status: 'success', msg: 'request approved', data: newEnquiry });
        }
        catch (error) {
            res.status(400).json({ err: error });
            console.log(error);
        }
    }),
    //admin**
    doEnquiry: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const productId = req.body.productId;
            const foundEnquiryModel = yield enquiry_1.default.findOne({ product: productId });
            if (foundEnquiryModel)
                return res.status(501).json({ status: 'fail', msg: 'enquiry already exists' });
            if (!productId)
                return res.status(400).json({ msg: 'product not found' });
            let newEnquiryModel = new enquiry_1.default({ product: productId });
            yield newEnquiryModel.save();
            res.status(200).json({ status: 'success', msg: 'created request to add product into cart', data: newEnquiryModel });
        }
        catch (error) {
            console.log(error);
            res.status(400).json({ msg: "product add enquiry failed", err: error });
        }
    })
};
