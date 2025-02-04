import User from "../models/user.model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

const createUser = async(req,res,)=>{
const {name,email,password,} = req.body;
const hashPassword = bcrypt.hashSync(req.body.password,10)
try {
    const user = await User.create({name,email,password:hashPassword})
    res.status(201).json({massage:"user created succefully",data:user})
} catch (error) {
   res.status(500).json({message:error.message}) 
}
}

const login = async(req,res)=>{
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(!user){
        return res.status(403).json({message:"invali email"})
    }else{
        const comperePassword = bcrypt.compareSync(password,user.password)
        if(!comperePassword){
            return res.status(403).json({message:"invalid password"})
        }else{
            const token = jwt.sign({user:user},process.env.SCRETKEY,{expiresIn:"1d"})
            res.status(200).json({message:"login succefuly",token})
        }
    }
}

const getUser = async (req,res)=>{
    try {
        const user = await User.find({})
        res.status(200).json({data:user})
        
    } catch (error) {
        res.status(500).json({message:error.massage})
    }
}
export {createUser,login,getUser}