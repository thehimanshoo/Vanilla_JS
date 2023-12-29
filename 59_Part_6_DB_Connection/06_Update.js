import { MongoClient } from "mongodb";

const conStr = "mongodb+srv://admin:admin@cluster0.8uig5cd.mongodb.net/eventsBookingDB?retryWrites=true&w=majority";
const filter = { ProductId: 2 };
const update = { $set: { Price: 50000 } };

async function UpdateData() {
    try {

        const client = await MongoClient.connect(conStr);
        const database = client.db("iShop");
        const result = await database.collection("products").updateOne(filter, update);

        // To print the updated data, Here creating a copy of all updated data
        const collection = await database.collection("products").find().toArray();

        if(result.acknowledged){
            console.log("Record updated successfully !!");

            for(var data of collection){
                if(data.ProductId === filter.ProductId){
                    console.log(data);
                    break;
                };
            };
        }else{
            console.error("Updated record not found !!");
        };

        // Breaking the connection after updation complete
        client.close();
        
    } catch (error) {
        console.error("Connection to MongoDB Failed !!", error);
    };
};

UpdateData();
