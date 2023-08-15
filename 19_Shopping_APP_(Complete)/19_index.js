"use strict";

//  Main Body Function
const bodyLoad = () => {
  loadCategory();
  loadCategoryData("https://fakestoreapi.com/products");
  GetItemsCount();
};

// Logic to mode chage...Light/Dark
const modeChange = () => {
  var body = document.body;
  body.classList.toggle("dark-mode");
};

//  Function to load "Select Category"
const loadCategory = () => {
  fetch("https://fakestoreapi.com/products/categories")
    .then((response) => {
      return response.json();
    })
    .then((categories) => {
      categories.unshift("all");

      for (var category of categories) {
        var firstLetter = category.charAt(0).toUpperCase();
        var remainingLetter = category.slice(1).toLowerCase();

        var option = document.createElement("option");
        option.value = `${category}`;
        option.text = `${firstLetter + remainingLetter}`;

        document.getElementById("lstCategories").appendChild(option);
      }
    })
    .catch((err) => {
      console.error(err);
    });
};

//  Writing logic for category change
const categoryChange = () => {
  document.querySelector("main").innerHTML = "";
  var categoryName = document.getElementById("lstCategories").value;

  if (categoryName == "all") {
    loadCategoryData(`https://fakestoreapi.com/products`);
  } else {
    loadCategoryData(
      `https://fakestoreapi.com/products/category/${categoryName}`
    );
  }
};

//  Functio to fetch data of ALL Category
const loadCategoryData = (url) => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((products) => {
      for (var product of products) {
        var div = document.createElement("div");
        div.className = "card";
        div.style.width = "250px";
        div.style.marginRight = "35px";
        div.style.marginBottom = "45px";

        div.innerHTML = `
            <img src="${product.image}" alt="" width="230px" height="190px" class="card-img-top"/>

          <div class="card-header my-0 py-0 text-dark" style="height: 130px;">
            <p>${product.title}</p>
          </div>
          <div class="card-body py-0 my-0 text-dark">
            <dl>
              <dt>Price</dt>
              <dd>
                <span class="text-dark">
                    <strong>&#8377;</strong>
                </span> ${product.price}
              </dd>

              <dt>Category</dt>
              <dd>${product.category}</dd>

              <dt>Rating</dt>
              <dd>
                <span class="bi bi-star-fill" style="color: #FF9529"></span>
                ${product.rating.rate} [${product.rating.count}]
              </dd>
            </dl>
          </div>

          <div class="card-footer text-center text-dark">
            <button onclick="AddToCart(${product.id})" class="btn btn-danger"> <span class="bi bi-cart2"></span> Add to Cart</button>
          </div>
        `;

        document.querySelector("main").appendChild(div);
      }
    })
    .catch((error) => {
      console.error("Error :", error);
    });
};

// Logic to get the Cart Count
var productsCart = [];
const GetItemsCount = () => {
  document.getElementById("lblCount").innerHTML = productsCart.length;
};

// Add to Cart Button Click logic
const AddToCart = (id) => {
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((response) => {
      return response.json();
    })
    .then((product) => {
      productsCart.push(product);
      GetItemsCount();
    })
    .catch((error) => {
      console.error("Error :", error);
    });
    
};

// Logic to Shwo data of cart
const showCart = () => {
  document.querySelector("tbody").innerHTML = "";
  for(var item of productsCart){
    var tr = document.createElement("tr");
    var tdTitle = document.createElement("td");
    var tdPrice = document.createElement("td");
    var tdPreview = document.createElement("td");

    tdTitle.innerHTML = item.title;
    tdPrice.innerHTML = item.price;
    tdPreview.innerHTML = `
      <img src="${item.image}" alt="" width="50" height="50"/>
    `;

    tr.appendChild(tdTitle);
    tr.appendChild(tdPrice);
    tr.appendChild(tdPreview);
    
    document.querySelector("tbody").appendChild(tr);
  }
};
