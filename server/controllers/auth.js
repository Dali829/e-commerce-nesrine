import User from "../models/User.js";
import bcrypt from "bcryptjs";
import Jwt  from "jsonwebtoken";
import { createError } from "../utils/errors.js";

export const registre = async(req,res,next)=>{
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser= new User({
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            adresse:req.body.adresse,
            tel:req.body.tel,
            email:req.body.email,
            password:hash,
            role:req.body.role
        })
        await newUser.save()
        res.status(200).send("User has been created")
    }catch(err){
        next(err)
    }
}

export const login = async(req,res,next)=>{
    try{
        const user = await User.findOne({email:req.body.email});
        if(!user) return next(createError(404,"Wrong password or username!"));
         
        const isPasswordCorrect = await bcrypt.compare(req.body.password,user.password.toString())
        if(!isPasswordCorrect) return next(createError(400,"User not found!"))
        const token = Jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.JWT)
        const {password ,isAdmin, ...otherDetails}= user._doc;
        res.cookie("access_token",token,{httpOnly:true,}).status(200).json({...otherDetails})
    }catch(err){
        next(err)
    }
}

export const loginUser = async(req,res,next)=>{
    try{
        const user = await User.findOne({tel:req.body.tel});
        if(!user) return next(createError(404,"Wrong password or tel!"));
         
        const isPasswordCorrect = await bcrypt.compare(req.body.password,user.password.toString())
        if(!isPasswordCorrect) return next(createError(400,"User not found!"))
        const token = Jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.JWT)
        const {password ,isAdmin, ...otherDetails}= user._doc;
        res.cookie("access_token",token,{httpOnly:true,}).status(200).json({...otherDetails})
    }catch(err){
        next(err)
    }
}