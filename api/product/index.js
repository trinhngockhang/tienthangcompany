const express= require('express');
const Router = express.Router();
const productController= require('./productController');

Router.post('/add',(req,res) => {
    var product = {};
    product.name = req.body.name;
    product.description = req.body.description;
    product.price = req.body.price;
    productController.saveProduct(product,(err,doc) =>{
        if(err) console.log(err);
        console.log("done");
        res.send("done");
    })
})

Router.get("/",(req,res) =>{
    res.send("a");
})

Router.delete('/delete',(req,res) =>{
    var id = req.body.id;
    productController.deleteProduct(id,(err,done) =>{
        if(err){
            console.log(err);
        }else{
            console.log('done');
            res.send('done');
        }
    })
})

Router.put('/update',(req,res) => {
    var productUpdate = {};
    var id = req.body.id;
    productUpdate.name = req.body.name;
    productUpdate.description = req.body.description;
    productUpdate.price = req.body.price;
    productController.updateProduct(id,productUpdate,(err,doc) =>{
        if(err){
            res.send(err);
        }else{
            res.send("doneee");
        }
    })
    
})

module.exports= Router;