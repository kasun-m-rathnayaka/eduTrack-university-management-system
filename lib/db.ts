import { MongoClient, ServerApiVersion } from "mongodb";
import mongoose from "mongoose";

export const connect = async () => {
  const uri = process.env.MONGO_DB_URI || "";

  try {
    mongoose.connect(uri, {
      dbName:"eduTrack",
      bufferCommands:true,
    })
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  }
  catch(error){
    console.log("Error" + error)
    throw new Error
  } 
};
