import product from "../models/product.js";

export const createProduct = async (req,res,next)=>{
    const newProduct = new product(req.body)
    try{
    const saveProduct = await newProduct.save()
    res.status(200).json(saveProduct)
    }
    catch(err){
        next(err);
    }

}
export const updateProduct = async (req,res,next)=>{
    try{
        const updateProduct = await product.findByIdAndUpdate(req.params.id,{$set: req.body},{new:true})
        res.status(200).json(updateProduct)
        }
    catch(err){
        next(err);
    }

}
export const getProduct = async (req,res,next)=>{
    try{
        const Product = await product.findById(req.params.id).populate("productCategory")
        res.status(200).json(Product)
        }
    catch(err){
        next(err);
    }

}
export const deleteProduct = async (req,res,next)=>{
    try{
        await product.findByIdAndDelete(req.params.id)
       res.status(200).json(updateProduct)
       }
    catch(err){
        next(err);
    }

}
export const getAllProduct = async (req,res,next)=>{
    const failed = true;
    try{
    const Products = await product.find().populate("productCategory")
    res.status(200).json(Products)
    }
    catch(err){
        next(err);
    }

}
