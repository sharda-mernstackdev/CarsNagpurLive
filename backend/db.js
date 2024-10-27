// const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     await mongoose.connect( 'mongodb://localhost:27017/Carsss');
//     console.log('MongoDB connected');
//   } catch (error) {
//     console.error('MongoDB connection error:', error);
//     process.exit(1);
//   }
// };

// module.exports = { connectDB };

const mongoose= require ('mongoose')

const connectDB=async ()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/Carsss')
        console.log('mongo connected');
        
    } catch (error) {
        console.log(error);
        
    }
}
module.exports={connectDB}