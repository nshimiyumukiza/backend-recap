import express from "express"
import {createStudent,getStudent,getOneStudent,updateStudent,deleteUser} from "../controllers/student.controller.js"


const router = express.Router()

router.post("/",createStudent)
router.get("/",getStudent)
router.get("/:id",getOneStudent)
router.put("/:id",updateStudent)
router.delete("/:id",deleteUser)

export default router;
