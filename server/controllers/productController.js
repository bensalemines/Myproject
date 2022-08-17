const Product = require ('../models/productsModel.js')

exports.createProduct =async (req,res)=>{ 
try { 
   const proUrl = `http://localhost:4500/uploads/${req.file.filename}`;
    const {productName, productPrice} = req.body;
    const newProduct = await Product.create({productImage:proUrl,productName, productPrice});
        res.json({msg:'Product created :)', ProductInfo : {productName:newProduct.productName,productImage:proUrl,productPrice:newProduct.productPrice}})
} catch (error) {
    console.log(error)
    res.status(500).json({msg:'Something went wrong!'}) 
}
}
exports.getProductList = async (req,res)=>{
    try {
        const productList = await Product.find({})
        res.json(productList);
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:'Something went wrong!'}) 
    }
}
exports.deleteProduct = async(req,res)=>{
    try {
              await Product.findByIdAndDelete(req.params._id);
              res.status(200).send("Product has been deleted...");
            } catch (error) {
              res.status(500).send(error);
            }
         
}

exports.editProduct = async(req,res)=>{
    try {
        const updatedProduct = await product.findByIdAndUpdate(
            req.params.id,{
                $set:
                req.body.product,
            },
            {new:true}
        ); 
        res.status(200).send(updatedProduct)
    } catch (error) {
        res.status(500).send(error)
    }
   
    

}