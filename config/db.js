import mongoose from "mongoose";

mongoose.connect(process.env.MONGO)
    .then(() => { console.log('db conected') })
    .catch(() => { 'error with db connection' })