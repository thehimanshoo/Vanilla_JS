import {createServer} from "http";

const port = 5500;
const localhost = `http://localhost:${port}`;

const server = createServer(async (req, res) => {

    try{
        const nodeRes = "<div style='text-align: center;'><code><font color='blue' size='30'><strong>Welcome to Node JS Server !!</strong></font></code></div>";

        res.writeHead(200, {"Content-Type" : "text/html"});
        res.write(nodeRes);
        res.end();

    }catch(err){
        const errMsg = `<div ><code><font color='red'><strong>Error Connecting mongoDB !! </br> ${err} </strong></font></code></div>`;

        res.write(errMsg);
        res.end();

        console.log("Connection to Server is Failed..");
        console.error(err);
    };
});

server.listen(port);
console.log(`Node server is listening to ${localhost}`);