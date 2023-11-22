import categorie from "../models/categorie.js";

export const createCategorie = async (req,res,next)=>{
    const newcategorie = new categorie(req.body)
    try{
    const saveCategorie = await newcategorie.save()
    res.status(200).json(saveCategorie)
    }
    catch(err){
        next(err);
    }

}
export const updateCategorie = async (req,res,next)=>{
    try{
        const updateCategorie = await categorie.findByIdAndUpdate(req.params.id,{$set: req.body},{new:true})
        res.status(200).json(updateCategorie)
        }
    catch(err){
        next(err);
    }

}
export const getCategorie = async (req,res,next)=>{
    try{
        const Categorie = await categorie.findById(req.params.id)
        res.status(200).json(Categorie)
        }
    catch(err){
        next(err);
    }

}
export const deleteCategorie = async (req,res,next)=>{
    try{
        await categorie.findByIdAndDelete(req.params.id)
       res.status(200).json(updateCategorie)
       }
    catch(err){
        next(err);
    }

}
export const getAllCategorie = async (req,res,next)=>{
    const failed = true;
    try{
    const Categories = await categorie.find()
    res.status(200).json(Categories)
    }
    catch(err){
        next(err);
    }

}
