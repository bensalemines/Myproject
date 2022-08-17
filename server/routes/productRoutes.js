const express = require ('express');
const router = express.Router() ;
const{createProduct,getProductList, deleteProduct, editProduct} = require('../controllers/productController.js');
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
router.delete('/:_id',deleteProduct)
router.put('/update/:_id', editProduct)
module.exports = router