const mongoClient = require("mongodb").MongoClient;
const express = require("express");
const cors = require("cors");

const conStr = "mongodb+srv://admin:admin@cluster0.8uig5cd.mongodb.net/eventsBookingDB?retryWrites=true&w=majority";
const port = 4400;
const localhost = `http://localhost:${port}`;

const app = express();
app.use(cors());
app.use(express.json());



/*
   Home Router
   Usage  : Get Home Page
   URL    : http://localhost:4400
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
   URL    : http://localhost:4400/products
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
   URL    : http://localhost:4400/addproduct
   access : public
   method : Post
*/

app.post("/addproduct", async (req, res) => {

    const product = {
        ProductId: parseInt(req.body.ProductId),
        Name: req.body.Name,
        Price: parseFloat(req.body.Price),
        Rating: {
            Rate: req.body.Rating && req.body.Rating.Rate ? parseFloat(req.body.Rating.Rate) : 0,
        count: req.body.Rating && req.body.Rating.count ? parseInt(req.body.Rating.count) : 0
        },
        CategoryId: parseInt(req.body.CategoryId),
        stocks: (req.body.stocks == "true") ? true : false
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
   URL    : http://localhost:4400/customers
   access : public
   method : Get
*/

app.get("/customers", async (req, res)=> {

    try{
        const client = await mongoClient.connect(conStr);
        const db = client.db("iShop");
        const customers = await db.collection("customers").find({}).toArray();

        // console.log(customers);
        res.send(customers);
        client.close();

    }catch(err){
        console.error(err);
    };
});


/*
   Customer Register
   Usage  : Register Customer
   URL    : http://localhost:4400/registercustomer
   access : public
   method : Post
*/

app.post("/registercustomer", async (req, res)=> {

    const customerData = {
        UserId : req.body.UserId,
        UserName : req.body.UserName,
        Password : req.body.Password,
        Age : parseInt(req.body.Age),
        Email : req.body.Email,
        Mobile : req.body.Mobile,
    };

    try{
        const client = await mongoClient.connect(conStr);
        const db = client.db("iShop");
        const customer = await db.collection("customers").insertOne(customerData);

        console.log("Customer Successfully Registered...");
        // res.redirect("/customers");
        client.close();

    }catch(err){
        console.error(err);
    };
});

/*
   Unwanted Router
   Usage  : Get Warning
   URL    : http://localhost:4400/abc
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
                        <li> <a href="http://localhost:4400/">Home</a> </li>
                        <li> <a href="http://localhost:4400/products">Products</a> </li>
                        <li> <a href="http://localhost:4400/customers">Customers</a> </li>
                </ol>
            </h1>
        `);
});
app.listen(port);
console.log(`Express server is running at ${localhost}`);