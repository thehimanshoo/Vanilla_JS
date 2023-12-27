import { MongoClient } from "mongodb";

const conStr = "mongodb+srv://admin:admin@cluster0.8uig5cd.mongodb.net/eventsBookingDB?retryWrites=true&w=majority";

var product = {
    "ProductId": 21,
    "Name": "Nike Casuals",
    "Price": 5500.63,
    "Rating": { "Rate": 4.8, "count": 8200 },
    "CategoryId": 16
};

async function InsertData() {

    try{
        const client = await MongoClient.connect(conStr);
        const database = client.db("iShop");
        database.collection("products").insertOne(product);

        console.log("Inserted Successfully !!");

    }catch(err){
        console.error("Failed to connect to mongoDB :", err.message);
    };
};

InsertData();