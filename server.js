const express = require('express'); 
const bodyParser = require('body-parser');
const compression = require('compression');
const next = require('next');
const PORT = 6969 || process.env.PORT;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const mongoose= require('mongoose');
const Router = require('./src');
const handle = app.getRequestHandler();
const productController = require('./api/product/productController');
const connectionString = "mongodb://localhost/tienthang";
app.prepare().then(() => {
    const server = express();
    server.use(compression());
    server.use(bodyParser.json({ extend: true }));
    server.use(bodyParser.urlencoded({ extend: true }));
    //listen
    server.get('/', (req, res) => {
        res.send("home");
    });
    server.post('/addProduct',(req,res) => {
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
    server.get('*', (req, res) => {
        return handle(req, res);
    });

    
    


    server.listen(PORT, err => {
        if (err) throw err;
        console.log(`Server listening on ${PORT}`);
    });
});

mongoose.connect(connectionString, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Connect DB success !');
    }
  })