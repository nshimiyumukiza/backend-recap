const express =require("express")
const {createStudent,getStudent,getOneStudent,updateStudent,deleteUser} = require("../controllers/student.controller")
const Student = require("../models/student.model")

const router = express.Router()

router.post("/",createStudent)
router.get("/",getStudent)
router.get("/:id",getOneStudent)
router.put("/:id",updateStudent)
router.delete("/:id",deleteUser)

module.exports = router;
