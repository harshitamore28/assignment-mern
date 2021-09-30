//IMPORTING MONGOOSE LIBRARY
const mongoose = require('mongoose')

//FUNCTION TO CONNECT TO MONGODB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host }`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit();
  }
};

//EXPORTING THE FUNCTION
module.exports = connectDB;