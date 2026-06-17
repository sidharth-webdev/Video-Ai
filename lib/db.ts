import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI! 

if(!MONGODB_URI){
    throw new Error("Please define mongo_uri in env variables")
}  

let cached = global.mongoose

if(!cached){
    cached = global.mongoose = {conn: null, promise: null}
}

