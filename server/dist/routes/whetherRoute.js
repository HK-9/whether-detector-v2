"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const whetherRoute_1 = __importDefault(require("../controllers/whetherRoute"));
//su**
router.get('/getwhether', whetherRoute_1.default.getWhether);
//admin**
exports.default = router;
