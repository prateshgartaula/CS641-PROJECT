var express = require('express');
var sql = require("mssql");
const cors=require('cors')
var app = express();
app.use(cors());
    // config for your database
    var config = {
        user: 'sa',
        password: '9542822202',
        server: 'LAPTOP-UK694RRG\\SAIKUMARSQL',
        database: 'ShoppingDB',
        //port:'1433',
        "options": {
            "encrypt": true,
            "enableArithAbort":true
            },
    };
    app.use(function(req, res, next) {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods",'GET,POST,OPTIONS,PUT,PATCH,DELETE');
        res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type, from,to");
        res.setHeader('Access-Control-Allow_Credentials',true);
        next();
      });
//
    app.get('/api/UserLogin', function (req, res) {

console.log("User Login Request");
var userId=req.headers['userid'];
var password = req.headers['password'];
console.log("password"+userId);
console.log("User"+userId);
    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);
        var userId=req.headers['userid'];
        var password = req.headers['password'];
        // create Request object
        var request = new sql.Request();
        request.input('userId',userId);
        request.input('password',password);
           request.execute('dbo.getUserDetailsByUserId',function(err,recordset){
            if (err) console.log(err);
            res.send(recordset);
            
        });
    });
    });
    app.get('/api/Categories', function (req, res) {

    console.log("get categories");
        // connect to your database
        sql.connect(config, function (err) {
        
            if (err) console.log(err);
            // create Request object
            var request = new sql.Request();
               request.execute('dbo.getProductCategories',function(err,recordset){
                if (err) console.log(err);
                res.send(recordset);
                
            });
        });
    });
    app.get('/api/ProductsByCategory', function (req, res) {

        console.log("get products by category");
            // connect to your database
            sql.connect(config, function (err) {
            
                if (err) console.log(err);
                var categoryId=req.headers['categoryid'];
                // create Request object
                var request = new sql.Request();
                request.input('categoryId',categoryId);
                   request.execute('dbo.getProductsByCategory',function(err,recordset){
                    if (err) console.log(err);
                    res.send(recordset);
                    
                });
            });
        });
        app.get('/api/ProductByProductId', function (req, res) {

            console.log("get products by product id");
                // connect to your database
                sql.connect(config, function (err) {
                
                    if (err) console.log(err);
                    var productId=req.headers['productid'];
                    // create Request object
                    var request = new sql.Request();
                    request.input('productId',productId);
                       request.execute('dbo.getProductDetailsByProductId',function(err,recordset){
                        if (err) console.log(err);
                        res.send(recordset);
                        
                    });
                });
            });
        app.post('/api/AddToCart', function (req, res) {

                console.log("Add to cart");
                    // connect to your database
                    sql.connect(config, function (err) {
                    
                        if (err) console.log(err);
                        var userId=req.headers['userid'];
                        var productId=req.headers['productid'];
                        var quantity=req.headers['quantity'];
                        // create Request object
                        var request = new sql.Request();
                        request.input('productId',productId);
                        request.input('userId',userId);
                        request.input('quantity',quantity);
                           request.execute('dbo.AddToCart',function(err,recordset){
                            if (err) console.log(err);
                            res.send(recordset);
                            
                        });
                    });
            });
        app.delete('/api/ClearCartByUserId', function (req, res) {

                    console.log("Cleart cart");
                        // connect to your database
                        sql.connect(config, function (err) {
                        
                            if (err) console.log(err);
                            var userId=req.headers['userid'];
                            // create Request object
                            var request = new sql.Request();
                            request.input('userId',userId);
                               request.execute('dbo.ClearCartByUserId',function(err,recordset){
                                if (err) console.log(err);
                                res.send(recordset);
                                
                            });
                        });
            });
        app.get('/api/CartDetailsByUserId', function (req, res) {

                console.log("cart details by user");
                    // connect to your database
                    sql.connect(config, function (err) {
                    
                        if (err) console.log(err);
                        var userId=req.headers['userid'];
                        // create Request object
                        var request = new sql.Request();
                        request.input('userId',userId);
                           request.execute('dbo.GetCartDetailsByUser',function(err,recordset){
                            if (err) console.log(err);
                            res.send(recordset);
                            
                        });
                    });
            });
        app.delete('/api/RemoveItemFromCartByCartId', function (req, res) {
                    console.log("remove item from cart");
                        // connect to your database
                        sql.connect(config, function (err) {
                        
                            if (err) console.log(err);
                            var cartId=req.headers['cartid'];
                            // create Request object
                            var request = new sql.Request();
                            request.input('cartId',cartId);
                               request.execute('dbo.RemoveFromCartByCartId',function(err,recordset){
                                if (err) console.log(err);
                                res.send(recordset);
                                
                            });
                        });
            });


var server = app.listen(3000, function () {
    console.log('Server is running at port 3000...');
});