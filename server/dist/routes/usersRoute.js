"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const adminControllers_1 = __importDefault(require("../controllers/adminControllers"));
//su**
router.post('/createadmin', adminControllers_1.default.createAdmin);
router.get('/getalladmins', adminControllers_1.default.viewAdmin);
router.post('/approve_enquiry', adminControllers_1.default.approveEnquiry);
//admin**
router.post('/do_enquiry', adminControllers_1.default.doEnquiry);
exports.default = router;
