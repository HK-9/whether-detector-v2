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
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const users_1 = __importDefault(require("../model/users"));
const signToken = (id) => {
    return jsonwebtoken_1.default.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: 90000,
    });
};
const user = users_1.default;
// type userType = [{
//     _id: string;
// }]
const createUserToken = (user, code, req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = signToken(user._id);
        user.password = undefined;
        // {sameSite: 'none', httpOnly: true, secure: true}
        res.cookie("jwt", token).json({
            status: "success",
            token,
            data: {
                user,
            },
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ message: 'createUserTokenFailed', error });
    }
});
exports.default = createUserToken;
