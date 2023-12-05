import mongoose from "mongoose";

export function mongooseConnect() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("MONGODB_URI is not defined");
  }

  if (mongoose.connection.readyState === 1) {
    console.log("already connected to mongoose");

    return mongoose.connection.asPromise();
  } else {
    console.log("connecting to mongoose...");
    return mongoose.connect(uri);
  }
}
