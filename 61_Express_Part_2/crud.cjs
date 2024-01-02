const express = require("express");
const mongoClient = require("mongodb").MongoClient;
const cors = require("cors");

const port = 4400;
const localhost = `http://localhost:${port}`;

const conStr = "mongodb+srv://admin:admin@cluster0.8uig5cd.mongodb.net/eventsBookingDB?retryWrites=true&w=majority";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {

    res.send(`<h1>Welcome to Express JS Home page !! </h1>`);
});

// Logic to get all products
app.get("/products", async (req, res) => {
    try {
        const client = await mongoClient.connect(conStr);
        const db = client.db("iShop");
        const products = await db.collection("products").find({}).toArray();

        res.send(products);
        console.log(products.length);
        client.close();

    } catch (err) {
        console.error(err);
    };
});


// Logic to post data
app.post("/addproducts", async (req, res) => {

    const data = {
        ProductId: parseInt(req.body.ProductId),
        Name: req.body.Name,
        Price: parseFloat(req.body.Price),
        Rating: {
            Rate: parseFloat(req.body.Rating.Rate),
            count: req.body.Rating.count
        },
        CategoryId: parseInt(req.body.CategoryId),
        stocks: (req.body.stocks == "true") ? true : false
    };

    try {

        const client = await mongoClient.connect(conStr);
        const db = client.db("iShop");
        await db.collection("products").insertOne(data, (errMsg, result) => {
            if (!errMsg) {
                console.log("Record Inserted Successfully...");
            } else {
                console.error(errMsg);
            };
        });

        res.redirect("/products");
        client.close();

    } catch (err) {
        console.error(err);
    };
});


// logic for unexisting page
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
                        <li> <a href="http://localhost:4400/addproducts">Add Products</a> </li>
                </ol>
            </h1>
        `);
});

app.listen(port)
console.log(`Server is listening at port : ${localhost}`);