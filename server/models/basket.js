import mongoose from 'mongoose';

const BasketSchema = new mongoose.Schema({
   

    userProfil: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    productSelected: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    }

});
export default mongoose.model("Basket", BasketSchema)




