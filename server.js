const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 7000;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/:id', express.static(path.join(__dirname, 'public')));


// //josephs
// app.use('/products/:id', createProxyMiddleware({target: 'http://localhost:4500', changeOrigin: true}));
// app.use('/get/random', createProxyMiddleware({target: 'http://localhost:4500', changeOrigin: true}));

// //michaels
// app.use('/product/:id', createProxyMiddleware({target: 'http://localhost:4200', changeOrigin: true}));
// app.use('/product/colors/:id', createProxyMiddleware({target: 'http://localhost:4200', changeOrigin: true}));
// app.use('/product/shop/:shopId', createProxyMiddleware({target: 'http://localhost:4200', changeOrigin: true}));


// //imrans
// app.use('/reviews/:id', createProxyMiddleware({target: 'http://localhost:5000', changeOrigin: true}));

// //Johns
// app.use('/api/carousel/:id', createProxyMiddleware({target: 'http://localhost:9000', changeOrigin: true}));
// app.use('/api/carouselEnlarged/:id', createProxyMiddleware({target: 'http://localhost:9000', changeOrigin: true}));




///////////////////////AWS////////////////
//josephs
app.use('/products/:id', createProxyMiddleware({target: 'http://ec2-54-241-234-93.us-west-1.compute.amazonaws.com:4500', changeOrigin: true}));
app.use('/get/random', createProxyMiddleware({target: 'http://ec2-54-241-234-93.us-west-1.compute.amazonaws.com:4500', changeOrigin: true}));

//michaels
app.use('/product/:id', createProxyMiddleware({target: 'http://ec2-54-241-234-93.us-west-1.compute.amazonaws.com:4200', changeOrigin: true}));
app.use('/product/colors/:id', createProxyMiddleware({target: 'http://ec2-54-241-234-93.us-west-1.compute.amazonaws.com:4200', changeOrigin: true}));
app.use('/product/shop/:shopId', createProxyMiddleware({target: 'http://ec2-54-241-234-93.us-west-1.compute.amazonaws.com:4200', changeOrigin: true}));


//imrans
app.use('/reviews/:id', createProxyMiddleware({target: 'http://ec2-54-241-234-93.us-west-1.compute.amazonaws.com:5000', changeOrigin: true}));

//Johns
app.use('/api/carousel/:id', createProxyMiddleware({target: 'http://ec2-54-241-234-93.us-west-1.compute.amazonaws.com:9000', changeOrigin: true}));
app.use('/api/carouselEnlarged/:id', createProxyMiddleware({target: 'http://ec2-54-241-234-93.us-west-1.compute.amazonaws.com:9000', changeOrigin: true}));
////////////////////////////////////


app.listen(port, function() {
  console.log(`listening on port ${port}`);
});