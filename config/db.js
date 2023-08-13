import mongoose from "mongoose";

mongoose.connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => { console.log('db conected') })
    .catch((err) => { console.log('error with db connection' + err) })