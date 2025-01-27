const express = require("express");
const mongoose =require("mongoose")
const studentsRouter = require("../node-recap/routes/student.route")
require("dotenv").config()

const app = express()
const port = process.env.PORT || 3000
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/api/students",studentsRouter)




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



