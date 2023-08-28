"use strict"

var categories = ["Select a category", "Electronics", "Footwear", "Fashion", "Kids-Wear"];
var electronics = ["Mobile", "TV", "Fridge", "Washing Machine", "Guicer", "Mixer"];
var footwear = ["Sneeker", "Boot", "Canvas", "Chinos", "Sports Shoes"];
var fashion = ["Jeans", "Shorts", "Baggy Jeans", "Denim", "Casual Shirt", "Formal Shirts", "Jack"];
var kids_wear = ["Shorts", "Full Lower", "Shirt", "Denim", "Casual Dress", "Formal Dress", "Jeans", "Jackets" ];

var Product = [];

const ChangeTheme = () => {
    var body = document.body;
    body.classList.toggle("dark-color");
};

const bodyload = () => {
    for(var category of categories){
        var option = document.createElement("option");
        option.text = category;
        option.value = category;

        document.getElementById("lblCategory").appendChild(option);
    };

};

const loadProduct = () => {
    document.getElementById("lblProduct").innerHTML = "";

    for(var item of Product){
        var option = document.createElement("option");
        option.text = item;
        option.value = item;

        document.getElementById("lblProduct").appendChild(option);
    }
};


const categoryChange = () => {
    var category = document.getElementById("lblCategory").value;
    console.log(category)

    switch(category){
        case "Electronics":
        Product = electronics;
        loadProduct();
        break;

        case "Footwear":
        Product = footwear;
        loadProduct();
        break;

        case "Fashion":
        Product = fashion;
        loadProduct();
        break;

        case "Kids-Wear":
        Product = kids_wear;
        loadProduct();
        break;

        default:
        Product = ["Please select a category"];
        loadProduct();
        break;
    }
};