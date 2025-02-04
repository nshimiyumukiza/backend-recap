import jwt from "jsonwebtoken"

const verifyAccess =(passRole)=>{
return (req,res,next) =>{
    const token = req.headers["auth"]
    if(!token){
        return res.status(403).json("no token provided")
    }else{
        try {
            const verifyToken = jwt.verify(token,process.env.SCRETKEY,{expiresIn:"1d"})
     req.user = verifyToken.user
     if(passRole !== verifyToken.user.role){
        return res.status(401).json("you dot have an access !")
     }else{
        return next()
     }
        } catch (error) {
          if(error.name = "jsonwebtoken"){
            res.status(401).json("invalid token or expired")
          }  
        }
    }
}
}
export default verifyAccess;