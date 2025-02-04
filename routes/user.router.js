import express from "express"
import { createUser, getUser, login } from "../controllers/user.controller.js";
import {  exitUser } from "../midleware/datacher.js";
import { accountRule, validationRule } from "../midleware/validition.js";
import verifyAccess from "../midleware/verify.js";
const router =express.Router()
router.post("/",exitUser,accountRule(),validationRule,createUser)
router.post("/login",login)
router.get("/",verifyAccess("user"),getUser)
export default router
