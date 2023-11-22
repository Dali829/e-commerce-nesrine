import basket from "../models/basket.js";

export const createBasket = async (req,res,next)=>{
    const newBasket = new basket(req.body)
    try{
    const saveBasket = await newBasket.save()
    res.status(200).json(saveBasket)
    }
    catch(err){
        next(err);
    }

}
export const updateBasket = async (req,res,next)=>{
    try{
        const updateBasket = await basket.findByIdAndUpdate(req.params.id,{$set: req.body},{new:true})
        res.status(200).json(updateBasket)
        }
    catch(err){
        next(err);
    }

}
export const getBasket = async (req,res,next)=>{
    try{
        const Basket = await basket.findById(req.params.id)
        res.status(200).json(Basket)
        }
    catch(err){
        next(err);
    }

}
export const deleteBasket = async (req,res,next)=>{
    try{
        await basket.findByIdAndDelete(req.params.id)
       res.status(200).json(updateBasket)
       }
    catch(err){
        next(err);
    }

}
export const getAllBasket = async (req,res,next)=>{
    const failed = true;
    try{
    const Baskets = await basket.find().populate("userProfil").populate("productSelected")
    res.status(200).json(Baskets)
    }
    catch(err){
        next(err);
    }

}
