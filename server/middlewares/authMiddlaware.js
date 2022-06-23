const jwt = require('jsonwebtoken')

const authMiddleware = (req,res,next) => { 
    try {
        const token = req.header('token')
        if(!token) return res.status(401).json({msg:'you are not authorized'});
        const verifyToken = jwt.verify(token,process.env.TOKEN_SECRET);
        req.userId = verifyToken.sub;
        next();
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:'Something went wrong!'})  
    }
 }
 module.exports = authMiddleware;