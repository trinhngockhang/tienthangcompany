const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const next = require('next');
const PORT = 6969 || process.env.PORT;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const mongoose = require('mongoose');
const LRUCache = require('lru-cache');
const Router = require('./src');
const handle = app.getRequestHandler();
const product = require('./api/product');
const productController = require('./api/product/productController');
const connectionString = "mongodb://localhost/tienthang";
let cacheTime = 1000 * 60 * 60;

if (dev) {
  cacheTime = 100;
}

const ssrCache = new LRUCache({
  max: 100,
  maxAge: cacheTime
})


app.prepare().then(() => {
    const server = express();
    server.use(compression());
    server.use(bodyParser.json({ extend: true }));
    server.use(bodyParser.urlencoded({ extend: true }));
    server.use('/product',product);
    //listen
    server.get('/', (req, res) => {
        renderAndCache(req, res, '/');
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

function getCacheKey(req) {
    return `${req.url}`
}

function renderAndCache(req, res, pagePath, queryParams) {
    const key = getCacheKey(req)
    if (ssrCache.has(key)) {
        console.log(`CACHE HIT: ${key}`)
        res.send(ssrCache.get(key))
        return
    }

    app
        .renderToHTML(req, res, pagePath, queryParams)
        .then(html => {
            res.send(html);
        })
        .catch(err => {
            app.renderError(err, req, res, pagePath, queryParams);
        })
}