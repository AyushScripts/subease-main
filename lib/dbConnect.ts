
import mongoose, { Mongoose } from "mongoose";

const MongoDB_URL = process.env.MONGODB_URI;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export const dbConnect = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!MongoDB_URL) {
    throw new Error("MONGODB_URI is not defined");
  }

  cached.promise =
    cached.promise ||
    mongoose.connect(MongoDB_URL, {
      dbName: "subeasedb",
      bufferCommands: false,
    });
  cached.conn = await cached.promise;
  return cached.conn;
};
