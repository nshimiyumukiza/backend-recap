import { check, validationResult } from "express-validator";
const validationRule = async (req,res,next)=>{
    const errors = validationResult(req)
  if(!errors.isEmpty()){
    const message = errors.array().map(error => error.msg)
  return  res.status(403).json({message:message})
  }
  return next()
}

const accountRule = ()=>{
    return[
        check("email","please email must contain @gmail.com").isEmail()
    ]
}
export {validationRule,accountRule}

