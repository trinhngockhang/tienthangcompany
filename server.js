const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const next = require('next');
const PORT = process.env.PORT || 6969;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const mongoose = require('mongoose');
const handle = app.getRequestHandler();
const product = require('./api/product');
const productController = require('./api/product/productController');
const admin = require('./api/admin');
const session = require('express-session');
const connectionString = "mongodb://localhost/tienthang";

app.prepare().then(() => {
    const server = express();
    server.use(session({
        secret: "aicungbietkhangdeptrainhungkhongbietsecretnaylagi",
        cookie: {
          maxAge : 1000*60*5*10000000000 //khoang thoi gian luu cookie
          }
        }))
    server.use(compression());
    server.use(bodyParser.json({limit:'50mb'}));
    server.use(bodyParser.urlencoded({extended:true, limit:'50mb'}));
    server.use('/product',product);
    server.use('/admin',admin);
    //listen
    server.get('/', (req, res) => {
        return app.render(req, res, '/');
    });
    
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
});

