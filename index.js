import express from "express";
import mongoose from "mongoose"
import studentsRouter from "../node-recap/routes/student.route.js"
import dotenv from "dotenv"
import userRouter from "./routes/user.router.js"

const app = express()
dotenv.config()
const port = process.env.PORT || 3000
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/api/students",studentsRouter)
app.use("/api/users",userRouter)




mongoose.connect(process.env.CONNECTION_STRING)
.then(()=>{
    console.log("connection to database")
    app.listen(port,()=>{
        console.log((`serve running on ${port}`))
    })
})
.catch((err)=>{
    console.log("connection failed")
})



