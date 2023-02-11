import dotenv from 'dotenv';
import express from "express"
import bodyParser from "body-parser";
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';
import logger from './utils/logger';
import cors from 'cors'
import authRoute from './routes/authRoute';
import whetherRoute from './routes/whetherRoute';
import verifyJWT from './middleware/verifyJWT';
import User from './model/users';

dotenv.config()
const app = express()
import './db'


const port = process.env.PORT || 500
const mongoUrl:string | undefined = process.env.DB_CONNECTION_STRING!
//initail setup
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use('/api/v1/auth',authRoute);
app.use('/api/v1/whether',whetherRoute)

app.use('/',(req,res)=>res.send('server is Online.. provide valid endpoint'))

//routes
// app.use('/api/v1/users');
// app.use('/api/v1/users');
// app.use('/api/v1/products');

app.listen(port,()=>logger.info(`server running on port ${port} waiting to connect with database..`))