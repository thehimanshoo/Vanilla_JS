const express = require("express");
const mongoClient = require("mongodb").MongoClient;

const conStr = "mongodb+srv://admin:admin@cluster0.8uig5cd.mongodb.net/eventsBookingDB?retryWrites=true&w=majority";
const port = 4400;

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Welcome to Express JS Server Home page !!</h1>");
});

app.get("/index", (req, res) => {
    res.send("<h1>Welcome to Index page....</h1>")
});

// To get the data on "/products" routs
app.get("/products", (req, res) => {
    console.log("Connecting to mongoDB....");

    async function dbConnection() {
        try {
            const client = await mongoClient.connect(conStr);
            const database = client.db("iShop");
            const products = await database.collection("products").find().toArray();

            res.send(products);
            console.log("Connected to mongoDB Successfully...");
            client.close();

        } catch (err) {
            console.error(err);
        }
    };
    dbConnection();
});

// To get the specific data with their id 
app.get("/products/:id", (req, res) => {
    async function GetDataWithId() {
        try {
            const client = await mongoClient.connect(conStr);
            const database = client.db("iShop");

            const productId = parseInt(req.params.id);
            const product = await database.collection("products").find({ ProductId: productId }).toArray();

            console.log(product);
            res.send(product);
            client.close();

        } catch (err) {
            console.error(err);
        };
    };

    GetDataWithId();
});

// To get data of stocks which are available/not
app.get("/filter/:stocks", async (req, res) => {

    try {

        const client = await mongoClient.connect(conStr);
        const db = client.db("iShop");

        const stockStatus = (req.params.stocks === "true") ? true : false;
        const products = await db.collection("products").find({ stocks: stockStatus }).toArray();

        console.log(products);
        res.send(products);
        // Disconnecting connection of mongoDB
        client.close();

    } catch (err) {
        console.error(err);
    };
});

// Searching based on price
app.get("/search/:price", async (req, res) => {

    try{
        const client = await mongoClient.connect(conStr);
        const db = client.db("iShop");

        const cost = parseInt(req.params.price);
        const condition = { Price: { $gte: cost } }; // Use $gte for greater than or equal to

        const collection = await db.collection("products").find(condition).toArray();
        res.send(collection);
        console.log(collection);
        client.close();

    }catch(err) {
        console.error(err);
    };
});

app.get("*", (req, res) => {
    res.send(`
    <h1>
        <div>
            API Provides only followings :
            <ol>
                <li> <a href="http://localhost:4400/">Home</a> </li>
                <li> <a href="http://localhost:4400/index">Index</a> </li>
                <li> <a href="http://localhost:4400/products">Products</a> </li>
                <li> <a href="http://localhost:4400/products/1">Products/Id</a> </li>
                <li> <a href="http://localhost:4400/filter/true">/filter/stocks</a> </li>
                <li> <a href="http://localhost:4400/search/500">search/price</a> </li>
            </ol>
        </div>
    </h1>
    `);
})

app.listen(port);
console.log(`Express server is running on port : http://localhost:${port}`);