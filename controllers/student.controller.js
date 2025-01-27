const Student = require("../models/student.model")
const createStudent = async(req,res)=>{
    try{
const student = await Student.create(req.body)
res.status(200).json(student)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}

const getStudent = async(req,res)=>{
    try{
        
        const student = await Student.find({})
        res.status(200).json(student)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
 
}

const getOneStudent = async(req,res)=>{
    try{
        const {id} = req.params
        const student = await Student.findById(id)
        if(!student){
            res.status(404).json({message:"student not found"})
        }
        res.status(200).json(student)

    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}
 
const updateStudent = async(req,res)=>{
    try{
        const {id} = req.params
       const student = await Student.findByIdAndUpdate(id)
       if(!student){
        res.status(404).json({message:"student not found"})
       }
       res.status(200).json(student)

    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}

const deleteUser = async(req,res)=>{
    try{
        const {id} = req.params;
        const student = await Student.findByIdAndDelete(id)
        if(!student){
            res.status(404).json({message:"student not found"})
        }
        res.status(200).json({message:"deleted user succefully"})

    }
    catch(err){
        res.status(500).json({message:"student not found"})
    }
}


module.exports = {createStudent,getStudent,getOneStudent,updateStudent,deleteUser}