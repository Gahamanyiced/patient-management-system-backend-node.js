const mongoose = require('mongoose');

const connectDB = async () => {
  
  try {
    const conn = await mongoose.connect(
      'mongodb://localhost:27017/Trainer2'
    );
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

module.exports = connectDB;
