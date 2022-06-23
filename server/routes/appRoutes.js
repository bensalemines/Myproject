const express = require ('express');
const router = express.Router() ;
const {register, login, getUserData} = require ('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddlaware');
const {body} = require('express-validator')

router.post('/register' ,body('email','invalid email').isEmail(),
body('password','password must have minimunm 8 characters','1 lowercase character','1 uppercase character and 1 number').isStrongPassword({
    minLength:8,
    minLowercase:1,
    minUppercase:1,
    minNumber:1
}),register );
router.post('/login' ,login );
router.get('/', authMiddleware, getUserData );
module.exports = router