import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

const connectDB = async () => {
  if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable');
  }

  if (mongoose.connection.readyState >= 1) {
    console.log('Already connected');
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: "SchoolPilotV3",
      bufferCommands: false,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.log('Error connecting to MongoDB:', error.message);
    throw new Error('Error connecting to Database');
  }
};

export default connectDB;