 // Checking path by path module

 const path = require("path");
 console.log(path);

 // Here i am checking image extension, to upload specific image to the server

 var imgPath = "/address/to/image";

 const checkExt = (imgPath) => {
    if(path.extname(imgPath) != ".png"){
        console.log("Only .png is allowed, Choose proper image type!");
        console.log("Your image type is " + typeof path.extname(imgPath))
    }else{
        console.log("Image uploaded succesfully!!");
    };
 };
 checkExt();