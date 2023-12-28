import {MongoClient} from "mongodb";

const conStr = "mongodb+srv://admin:admin@cluster0.8uig5cd.mongodb.net/eventsBookingDB?retryWrites=true&w=majority";

async function DeleteData() {

    try{

        const client = await MongoClient.connect(conStr);
        const database = client.db("iShop");
        const result = await database.collection("products").deleteOne({ProductId:21});

        if(result.deletedCount === 1){
            console.log("Record deleted successfully !!");
        }else{
            console.log("Record not found..");
        };

    }catch(err){
        console.error("Failed to delete :- ", err);
    }
};

DeleteData();