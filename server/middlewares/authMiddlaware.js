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
//  //FOR USER PROFILE
//  const isUser = (req, res, next) => {
//     authMiddleware(req, res, () => {
//       if (req.user._id === req.params._id || req.user.isAdmin) {
//         next();
//       } else {
//         res.status(403).send("Access denied. Not authorized...");
//       }
//     });
//   };
//   //FOR ADMIN
//   const isAdmin = (req, res, next) => {
//     authMiddleware(req, res, () => {
//       if (req.user.isAdmin) {
//         next();
//       } else {
//         res.status(403).send("Access denied. Not authorized...");
//       }
//     });
//   };
 module.exports = {authMiddleware};