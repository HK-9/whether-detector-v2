import { RequestHandler, Request, Response } from 'express';
import ProductModel  from '../model/products'
import User from '../model/users'
import axios from "axios"
import { Query } from 'mongoose';

export = {
    getWhether : async (req:Request, res:Response)=>{      
        // http://api.openweathermap.org/data/2.5/weather?q={city name}&appid=44cabff4fcce616a49480b1f9e33de2a
            try {
                const city = req.query.city;
                console.log('city',city)
                //TODO pass city as argument of the below function
                    const API_KEY = '44cabff4fcce616a49480b1f9e33de2a';
                    const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
                    const response = await axios.get(API_URL);
                    const weatherData = response.data;    
                    console.log(weatherData);
                res.status(200).json({status:'success',data:weatherData})
            } catch (error) {
              console.error(error);
              res.status(401).send(error)
            }
    }

}