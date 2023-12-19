const http = require("http");
// console.log(http);

// Checking the properties if http module
console.log("\n Properties in http module !!\n");
for(var property in http){
    console.log(property);
};

// Checking all METHODS of http module
console.log("\n Checking all METHODS in http module!! \n");
for(var value of http.METHODS){
    console.log(value);
};

// Checking the STATUS_CODES of http module
console.log("\n Checking STATUS_CODES in http module !!\n");
for(var statusCode in http.STATUS_CODES){
    console.log(`${statusCode} - [${http.STATUS_CODES[statusCode]}]`);
};