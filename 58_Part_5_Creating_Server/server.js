const http = require("http");

const app = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type" : "text/html"});
    
    const htmlContent = "<h2> Welcome to Node JS !! </h2>";
    const jsonData = [
        { "Name": "Samsung TV", "Price": "45000" },
        { "Name": "Mobile", "Price": "40,000" },
        { "Name": "Laptop", "Price": "100,000" }
    ];

    // Embed JSON data within script tags in the HTML response
    const htmlResponse = `${htmlContent}` + `${JSON.stringify(jsonData)}`;
    res.write(htmlResponse);
    res.end();
});

app.listen(5500);
const localhost = "http://127.0.0.1:5500";
console.log("Connected to server Succesfylly !!");
console.log(`Node js server is listening at ${localhost}`);