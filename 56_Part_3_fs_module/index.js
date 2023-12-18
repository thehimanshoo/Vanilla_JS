"use strict"

const fs = require("fs");

// Reading the file through synchronous technique
const jsonData = fs.readFileSync("../data/data.json");
const txtData = fs.readFileSync("../data/data.txt");

console.log("________________________Reading File Start in Synchronous technique________________________");
console.log("\n -------------------Reading JSON Data-------------------\n");

console.log(jsonData.toString());

console.log("\n -------------------Reading txt Data-------------------\n");
console.log(txtData.toString());

console.log("\n\n________________________Reading File End________________________");


// Reading the file from Asynchronous technique
console.log("\n________________________Reading File Start in Asynchronous technique________________________\n");
console.log("\n -------------------Reading File Data-------------------\n");

fs.readFile("../data/data.txt", (err, data) => {
    if(!err){
        console.log(data.toString());
    }else{
        console.log(err.message);
    };
});

console.log("\n\n________________________Reading End________________________");


// for(var properties in fs){
//     console.log(properties);
// };

//  // Reading File data Synchronously

// console.log("\n Reading File data Synchronously \n")
// var data = fs.readFileSync("../data/data.txt");
// console.log(data.toString());

// console.log("\n Reading complete \n");


// // Reading File data Asynchronously
// console.log("\n Reading File data Asynchronously \n");

// fs.readFile("../data/data.json", (err, resData) => {
//     if(!err){
//         console.log(resData.toString());
//     }else{
//         console.error(err.message);
//     };
// });

// console.log("Reading complete !!");
