"use strict";

var categories = [
  "Select a category",
  "Electronics",
  "Footwear",
  "Fashion",
  "Kids-Wear",
];
var electronics = [
  "Mobile",
  "TV",
  "Fridge",
  "Washing Machine",
  "Guicer",
  "Mixer",
];
var footwear = ["Sneeker", "Boot", "Canvas", "Chinos", "Sports Shoes"];
var fashion = [
  "Jeans",
  "Shorts",
  "Baggy Jeans",
  "Denim",
  "Casual Shirt",
  "Formal Shirts",
  "Jack",
];
var kids_wear = [
  "Shorts",
  "Full Lower",
  "Shirt",
  "Denim",
  "Casual Dress",
  "Formal Dress",
  "Jeans",
  "Jackets",
];

var Product = [];


const ChangeTheme = () => {
  var body = document.body;
  body.classList.toggle("dark-color");
}

const bodyload = () => {
  for (var category of categories) {
    var option = document.createElement("option");
    option.text = category;
    option.value = category;

    document.getElementById("lblCategory").appendChild(option);
    document.getElementById("errMsg").innerHTML = "";
  }
};

const changeCategory = () => {
  var selectedCategory = document.getElementById("lblCategory").value;
  // console.log(selectedCategory);
  switch (selectedCategory) {
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
      Product = ["Please select any Category"];
      break;  
  }
};

// console.log(Product)

const loadProduct = () => {
  document.getElementById("lblProduct").innerHTML = "";
  for(var item of Product){
    var option = document.createElement("option");
    option.text = item;
    option.value = item;

    document.getElementById("lblProduct").appendChild(option);
  }
};



//   _________________________ ATM PIN Validator ___________________________

const Credentials = ["4526", "7589", "7582", "2458"];
var validated = false;
var count = 4;
var key = "";

function chkPIN(){
 document.getElementById("txtPIN").innerHTML = "";
 var value = document.getElementById("txtPIN").value;
 key = value;
 return;
};


const submitClick = () => {
  var msg = document.getElementById("errMsg");
  var pin = document.getElementById("txtPIN").value;

  for(var data of Credentials){

    if(key === ""){
      msg.innerHTML = "Enter your PIN".fontcolor("red");
    }else{

      if(key === data){
        msg.innerHTML = "Validation Successful".fontcolor("green");
        validated = true;
        console.log(pin)
        break;
      }else{
        if(!validated === true){
          count--;
          if(count > 0){
            msg.innerHTML =  `Wrong Credential, ${count} times left`.fontcolor("red");
            break;
          }else{
            msg.innerHTML =  `Wrong Credential, Your card is now blocked`.fontcolor("red");
            document.getElementById("SubmitButton").disabled = true;
            document.getElementById("txtPIN").disabled = true;
          }
          
        }
      }

    }


  };
};
