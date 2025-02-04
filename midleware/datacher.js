import User from "../models/user.model.js";

const exitUser = async (req,res,next)=>{
const {name,email,password}= req.body;
if(!name){
    return res.status(403).json({message:"please name must be provided"})
}else if(!email){
    return res.status(403).json({message:"please email must be provided"})
}else if(!password){
    return res.status(403).json({message:"please password must be provided"})
}else{
    return next()
}
}
// const chekEmail = async (req,res,next)=>{
//     const email = req.body;
//     const user = User.findOne({email})
//     if(user){
//         res.status(403).json({message:"email arleady exit"})
//     }
//     return next()
// }
export {exitUser}