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
const bcrypt_1 = __importDefault(require("bcrypt"));
const createUserToken_1 = __importDefault(require("../utils/createUserToken"));
module.exports = {
    register: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            console.log('xxxxxxxxxxx', req.body);
            const { username, email, password } = req.body;
            if (!username || !email || !password)
                return res.status(401).json({ msg: 'all fields require' });
            console.log("username", req.body.username);
            const foundUser = yield users_1.default.findOne({ username });
            console.log(foundUser);
            if (foundUser)
                return res.status(403).json({ message: 'User already exist' });
            const newUser = new users_1.default({ username, email, password });
            yield newUser.save();
            res.status(200).send(newUser);
        }
        catch (error) {
            res.status(400).json({ err: error });
        }
    }),
    login: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { username, password } = req.body;
            if (!username || !password)
                return res.status(401).json({ msg: 'all fields required' });
            const founduser = yield users_1.default.findOne({ username }).select('+password');
            if (!founduser)
                return res.status(501).json({ status: 'fail', message: "user dosen't exist" });
            const validPassword = yield bcrypt_1.default.compare(password, founduser.password);
            if (!validPassword)
                return res.status(501).json({ status: 'fail', message: "wrong password" });
            (0, createUserToken_1.default)(founduser, 200, req, res);
        }
        catch (error) {
            console.log(error);
            return res.status(400).json({ message: 'login block failed', error });
        }
    }),
};
