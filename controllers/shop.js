const Product = require('../models/product');
exports.getProducts =  (req, res, next) => {
    const products = Product.fetchAll(products => {
        res.render('shop/product-list', { 
            prods: products,
            pageTitle: 'All Products',
            path: '/products',
        });
    });
};

exports.getIndex = (req, res, next) => {
    const products = Product.fetchAll(products => {
        res.render('shop/index', { 
            prods: products,
            pageTitle: 'Shop',
            path: '/',
        });
    });
};

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        pageTitle: 'Your Cart',
        path: '/cart'
    });
};
exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        pageTitle: 'Orders',
        path: '/orders'
    });
};
exports.getCheckout = (req, res, next) => {
    res.render('/shop/checkout', {
        pageTitle: 'Checkout',
        path: '/checkout'
    })
};

exports.pageNotFound = (req, res, next) => {
    //res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404', { pageTitle: 'Page not found', path: '404' });
};