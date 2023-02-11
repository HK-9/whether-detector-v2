"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const authController_1 = __importDefault(require("../controllers/authController"));
router.post('/login', authController_1.default.login);
router.post('/register', authController_1.default.register);
exports.default = router;
