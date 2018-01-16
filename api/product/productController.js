const productModel = require('./productModel');

var saveProduct= (object, callback)=>{
    productModel.findOne({})
    .select('id')
    .sort({id:-1})
    .exec((err,doc) => {
      if(err){
        console.log(err);
        callback(err);
      } else {
        var id;
        if (doc && doc.id) {
          id= doc.id + 1;
        }else {
          id=1;
        }
        object.id=id;
        productModel.create(object, (err,doc) => {
          if (err) {
            console.log(err);
            console.log('message', err.message);
            callback(err);
          } else {
            callback(null,doc);
          }
        })
      }
    })
  }



module.exports = {
    saveProduct
}