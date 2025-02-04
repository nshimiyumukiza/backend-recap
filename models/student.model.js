import mongoose from "mongoose"
const studentSchema =mongoose.Schema({
    fristName:{
        type:String,
        required:[true,"please provide first name"]
    },
    lastName:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    major:{
        type:String,
        required:true,
        default: "computer engineering"
    }
},{timestamps:true})

const Student = mongoose.model("Student",studentSchema)
export default Student