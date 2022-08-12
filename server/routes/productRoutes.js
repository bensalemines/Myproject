const express = require ('express');
const router = express.Router() ;
const{createProduct,getProductList} = require('../controllers/productController.js');
const multer = require ('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      const filename = Date.now() + '-' +file.originalname; 
      cb(null,filename )
    }
  })
  
  const upload = multer({ storage: storage })

router.post('/addProduct',upload.single('productImage'),createProduct)
router.get('/',getProductList )
module.exports = router