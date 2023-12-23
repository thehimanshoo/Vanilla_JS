import { MongoClient } from "mongodb";

const conStr = "mongodb://127.0.0.1:27017";

async function ConnectToDB() {

    try{
        await MongoClient.connect(conStr);
        console.log("Connected to mongoDB Successfully !!");

    }catch(err){
        console.log("Connection to mongoDB Failed !!");
        console.error(err);
    }
};

ConnectToDB();