"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const varifyJWT = (req, res, next) => {
    const cookie = req.headers.cookie;
    if (!cookie)
        return res.status(403).json({ message: 'cookie missing' });
    const jwtToken = cookie.split("=")[1];
    if (!jwtToken)
        return res.status(401).json({ message: 'unauthorized' });
    jsonwebtoken_1.default.verify(jwtToken, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Forbiden-manupulated token' });
        }
        req.body.decoded = decoded;
        next();
    });
};
exports.default = varifyJWT;
