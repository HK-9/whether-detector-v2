"use strict";
const mongoose = require('mongoose');
function connectDB() {
    mongoose.connect(process.env.DB_CONNECTION_STRING, { useUnifiedTopology: true, useNewUrlParser: true, strictQuery: false });
    const connection = mongoose.connection;
    connection.on('connected', () => {
        console.log('Mongo DB connection successfull');
    });
    connection.on('failed', () => {
        console.log('Mongo DB connection Error');
    });
}
connectDB();
module.exports = mongoose;
