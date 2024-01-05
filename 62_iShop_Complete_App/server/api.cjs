const { body, validationResult } = require("express-validator");
const mongoClient = require("mongodb").MongoClient;
const express = require("express");
const cors = require("cors");

const conStr = "mongodb+srv://admin:admin@cluster0.8uig5cd.mongodb.net/eventsBookingDB?retryWrites=true&w=majority";
const port = 4000;
const localhost = `http://localhost:${port}`;

const app = express();
app.use(cors());
app.use(express.json());



/*
   Home Router
   Usage  : Get Home Page
   URL    : http://localhost:4000
   access : public
   method : Get
*/

app.get("/", async (req, res) => {

    try {
        res.send(`<h1>Welcome to Express JS Home page !! </h1>`);

    } catch (err) {
        console.error(err);
    };
});



/*
   Products Router
   Usage  : Get all Products
   URL    : http://localhost:4000/products
   access : public
   method : Get
*/

app.get("/products", async (req, res) => {

    try {

        const client = await mongoClient.connect(conStr);
        const db = client.db("iShop");
        const products = await db.collection("products").find({}).toArray();

        // console.log(products);
        res.send(products);
        client.close();

    } catch (err) {
        console.error(err);
    };
});



/*
   Register Product
   Usage  : Post Product
   URL    : http://localhost:4000/addproduct
   access : public
   method : Post
*/

app.post("/addproduct", [
    body('ProductId').notEmpty().withMessage("ProductId is required..."),
    body('Name').notEmpty().withMessage("Name is required..."),
    body('Price').notEmpty().withMessage("Price is required..."),
    body('Rate').notEmpty().withMessage("Rate is required..."),
    body('count').notEmpty().withMessage("count is required..."),
    body('CategoryId').notEmpty().withMessage("CategoryId is required..."),
    body('stocks').notEmpty().withMessage("stocks is required..."),
], async (req, res) => {

    let errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(401).json({ msg: errors.array() });
        return console.log("All fields of addProduct are required to fill");
    };

    const validateField = (field, fieldName) => {
        if (field == undefined || field == null || field == "") {
            throw new Error(`Field : ${fieldName}`);
        };
    };

    const product = {
        ProductId: validateField(parseInt(req.body.ProductId), "ProductId"),
        Name: validateField(req.body.Name, "Name"),
        Price: validateField(parseFloat(req.body.Price), "Price"),
        Rating: {
            Rate: validateField(req.body.Rating && req.body.Rating.Rate ? parseFloat(req.body.Rating.Rate) : 0, "Rate"),
            count: validateField(req.body.Rating && req.body.Rating.count ? parseInt(req.body.Rating.count) : 0, "Count")
        },
        CategoryId: validateField(parseInt(req.body.CategoryId), "CategoryId"),
        stocks: validateField((req.body.stocks == "true") ? true : false, "Stocks")
    };

    try {
        const client = await mongoClient.connect(conStr);
        const db = client.db("iShop");
        const result = await db.collection("products").insertOne(product);

        console.log("Result Inserted Successfully...", result.insertedId);
        console.log("Total Customers :- ", JSON.stringify(result));
        res.redirect("/products");
        client.close();

    } catch (err) {
        console.error(err);
    };
});



//                      __________________________________________________________________________________________________


/*
   Customer Router
   Usage  : Get all Customers
   URL    : http://localhost:4000/customers
   access : public
   method : Get
*/

app.get("/customers", async (req, res) => {

    try {
        const client = await mongoClient.connect(conStr);
        const db = client.db("iShop");
        const customers = await db.collection("customers").find({}).toArray();

        // console.log(customers);
        res.send(customers);
        client.close();

    } catch (err) {
        console.error(err);
    };
});



/*
   Customer Login
   Usage  : Login User
   URL    : http://localhost:4000/login
   access : public
   method : post
*/


app.get("/login", [
    body('UserId').notEmpty().withMessage("UserId is required..."),
    body('Password').notEmpty().withMessage("Password is required...")
], async (req, res) => {

    let errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(401).json({ msg: errors.array() });
        return console.log("All Login fields are required to fill");
    };

    const validateField = (field, fieldName) => {
        if (field == undefined || field == null || field == "") {
            throw new Error(`Field : ${fieldName}`);
        };
    };


    try {
        let loginData = {
            UserId: validateField(req.body.UserId, "UserId"),
            Password: validateField(req.body.Password, "Password")
        };

        const client = await mongoClient.connect(conStr);
        const db = client.db("iShop");
        const customer = await db.collection('customers').find(loginData);

        if(!customer.isEmpty()){
            console.log("Login Successful");
        }else{
            alert("Users not exists...");
        };

    } catch (err) {
        console.error(err);
    }
});


/*
   Customer Register
   Usage  : Register Customer
   URL    : http://localhost:4000/registercustomer
   access : public
   method : Post
*/

app.post("/registercustomer", [
    body('UserId').notEmpty().withMessage("UserId is required..."),
    body('UserName').notEmpty().withMessage("UserName is required..."),
    body('Password').notEmpty().withMessage("Password is required..."),
    body('Age').notEmpty().withMessage("Age is required..."),
    body('Email').notEmpty().withMessage("Email is required..."),
    body('Mobile').notEmpty().withMessage("Mobile is required...")
], async (req, res) => {

    let errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(401).json({ msg: errors.array() });
        return console.log("All fields are required to fill");
    };


    const customerData = {
        UserId: req.body.UserId,
        UserName: req.body.UserName,
        Password: req.body.Password,
        Age: parseInt(req.body.Age),
        Email: req.body.Email,
        Mobile: req.body.Mobile
    };

    try {
        const client = await mongoClient.connect(conStr);
        const db = client.db("iShop");
        const customer = await db.collection("customers").insertOne(customerData);

        console.log(`Customer Successfully Registered : ${customer.insertedId}`);
        res.redirect("/customers");
        client.close();

    } catch (err) {
        console.error(err);
    };
});


/*
   Unwanted Router
   Usage  : Get Warning
   URL    : http://localhost:4000/abc
   access : public
   method : Get
*/

app.get("*", (req, res) => {
    res.send(`
            <h1>
                <code>
                    <font color="red">Page you are trying search is not found..</font></br>
                </code>

                API Provides only followings
                    <ol>
                        <li> <a href="http://localhost:4000/">Home</a> </li>
                        <li> <a href="http://localhost:4000/products">Products</a> </li>
                        <li> <a href="http://localhost:4000/customers">Customers</a> </li>
                </ol>
            </h1>
        `);
});
app.listen(port);
console.log(`Express server is running at ${localhost}`);