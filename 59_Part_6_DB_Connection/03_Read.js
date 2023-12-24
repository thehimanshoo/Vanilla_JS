import {MongoClient} from "mongodb";

const conStr = "mongodb+srv://admin:admin@cluster0.8uig5cd.mongodb.net/eventsBookingDB?retryWrites=true&w=majority";

const client = await MongoClient.connect(conStr, async (err, clientObj)=> {
    try{
        if(!err){
            console.log("Connected to mongoDB Successfully..");
        }else{
            return err;
        }
    }catch(err){
        console.log("Connection to mongoDB Failed");
        console.error(err);
    }
});
const database = client.db("iShop");
const products = await database.collection("products").find().toArray();
console.log(products);