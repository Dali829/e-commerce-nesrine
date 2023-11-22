import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        
    },
    lastname: {
        type: String,
        required: true,
       
    },
    email: {
        type: String,
        required: true,
        unique:true
       
    },
    adresse: {
        type: String,
       
       
    },
    tel: {
        type: Number,
        required: true,
        unique: true
    },
    role: {
        type: String,
        unique: false,
        default: "user"

    },
    password: {
        type: [String],

    },

}, { timestamps: true });
export default mongoose.model("User", UserSchema)




