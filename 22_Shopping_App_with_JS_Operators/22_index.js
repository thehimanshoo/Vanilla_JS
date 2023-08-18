"use strict"

const bodyload = () => {
    GetProduct("https://fakestoreapi.com/products/1");
};

const GetProduct = (url) => {
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((product) => {
        document.getElementById("lblTitle").innerHTML = product.title;
        document.getElementById("lblCategory").innerHTML = product.category;
        document.getElementById("lblPrice").innerHTML = `$ ${product.price}`;
        document.getElementById("lblRating").innerHTML =  `${product.rating.rate} [${product.rating.count}]`
        document.getElementById("lblDescription").innerHTML = product.description;

        var preview = document.getElementById("lblImage");
        preview.src = `${product.image}`;
        preview.alt = "";
        preview.style.width = "100%";
        preview.style.height = "250px"
    })
    .catch((err) => {
        console.error(err);
    });
};

var productId = 1;
const PrevClick = () => {
    if(productId > 0){
        productId--;
        GetProduct(`https://fakestoreapi.com/products/${productId}`);
    }
};

const NextClick = () => {
    productId++
    GetProduct(`https://fakestoreapi.com/products/${productId}`);
};

