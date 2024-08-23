import mongoose from "mongoose";

async function dbConnect() {
  try {
    const connectionDb = await mongoose.connect(String(process.env.MONGODB_URI));
    return connectionDb;
  } catch (err) {
    console.log(err);
  }
}

export default dbConnect;
