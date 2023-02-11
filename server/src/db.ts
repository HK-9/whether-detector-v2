import mongoose  from 'mongoose'


function connectDB(){


    mongoose.connect(process.env.DB_CONNECTION_STRING!, <any>{useUnifiedTopology:true,useNewUrlParser:true})
    mongoose.set('strictPopulate', false);
    const connection = mongoose.connection
    
    connection.on('connected',() => {
        console.log('Mongo DB connection successfull');
    })
    connection.on('failed',() => {
        console.log('Mongo DB connection Error');
    })
    
}
connectDB();

export default mongoose;