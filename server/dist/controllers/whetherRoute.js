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
const axios_1 = __importDefault(require("axios"));
module.exports = {
    getWhether: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        // http://api.openweathermap.org/data/2.5/weather?q={city name}&appid=44cabff4fcce616a49480b1f9e33de2a
        try {
            const city = req.query.city;
            console.log('city', city);
            //TODO pass city as argument of the below function
            const API_KEY = '44cabff4fcce616a49480b1f9e33de2a';
            const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
            const response = yield axios_1.default.get(API_URL);
            const weatherData = response.data;
            console.log(weatherData);
            res.status(200).json({ status: 'success', data: weatherData });
        }
        catch (error) {
            console.error(error);
            res.status(401).send(error);
        }
    })
};
