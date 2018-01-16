const mongoose= require('mongoose');
const Schema= mongoose.Schema;

var products= new Schema({
   name: {required:true,type:String},
   description: {required:true,type:String},
   price: {type:String},
   id:{required:true,type:Number}
},{timestamps : true})

products.index({name : 'text'});

module.exports = mongoose.model('products',products);
