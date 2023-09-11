import { Schema, model, Types } from "mongoose";

const collection = 'users';

let schema = new Schema({
    email: { type: String, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    image: { type: String, required: true },
    online: { type: Boolean, default: false },
    verified: { type: Boolean, default: true },
    verified_code: { type: String },
    role: { type: String }
}, {
    timestamps: true
})

const User = model(collection, schema)

export default User;