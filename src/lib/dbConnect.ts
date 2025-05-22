import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

type ConnectionObject = {
  isConnected?: number
}

const connection: ConnectionObject = {}

async function connectDB(): Promise<void> {
  if (connection.isConnected) {
    console.log("db already connect");
    return;
  }
  try {
    const db = await mongoose.connect(MONGODB_URI, {
      connectTimeoutMS: 30000,
      socketTimeoutMS: 45000,
    })
    connection.isConnected = db.connections[0].readyState
    console.log("db connected");
  } catch (error) {
    console.log("db not connected", error);
    process.exit(1)
  }
}

export default connectDB;