"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
function connectDB() {
    mongoose_1.default.connect(process.env.DB_CONNECTION_STRING, { useUnifiedTopology: true, useNewUrlParser: true });
    mongoose_1.default.set('strictPopulate', false);
    const connection = mongoose_1.default.connection;
    connection.on('connected', () => {
        console.log('Mongo DB connection successfull');
    });
    connection.on('failed', () => {
        console.log('Mongo DB connection Error');
    });
}
connectDB();
exports.default = mongoose_1.default;
