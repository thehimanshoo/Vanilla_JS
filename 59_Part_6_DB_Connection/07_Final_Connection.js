import { createServer } from "http";
import { MongoClient } from "mongodb";

const port = 5500;
const localhost = `http://localhost:${port}`;
const conStr = "mongodb+srv://admin:admin@cluster0.8uig5cd.mongodb.net/eventsBookingDB?retryWrites=true&w=majority";

const server = createServer(async (req, res) => {
    
    try{
        const dbRes = "<div style='text-align: center;'><code><font color='green' style='font-size: 20px;'><strong>Connected to mongoDB Successfully !!</strong></font></code></div>";
        const nodeRes = "<div style='text-align: center;'><code><font color='blue' size='30'><strong>Welcome to Node JS Server !!</strong></font></code></div>";

        res.writeHead(200, {"Content-Type" : "text/html"});
        const client = await MongoClient.connect(conStr);
        const database = client.db("iShop");
        const eventsData = await database.collection("products").find().toArray();

        res.write(nodeRes);
        res.write(dbRes);
        res.end();
        console.log(eventsData);

    }catch(err){
        const errMsg = `<div ><code><font color='red'><strong>Error Connecting mongoDB !! </br> ${err} </strong></font></code></div>`;

        console.error(err);
        res.write(errMsg);
        res.end();
    }
});
server.listen(port);
console.log(`Node server is listening to ${localhost}`);