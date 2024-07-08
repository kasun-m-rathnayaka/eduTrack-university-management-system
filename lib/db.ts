import { MongoClient, ServerApiVersion } from "mongodb";
import mongoose from "mongoose";

export const connect = async () => {
  const uri = process.env.MONGO_DB_URI || "";

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  }
  catch(error){
    console.log("Error" + error)
    throw new Error
  } finally {
    await client.close();
  }
};
