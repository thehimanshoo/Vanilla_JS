"use strict"

// _____________________Toggle Button Logic_____________________

function Toggler() {
  $("body").click(() => {
    var body = document.body;
    body.classList.toggle("light-mode");
  });
};

// _____________________Categories Logic_____________________

function LoadCategory() {
  const categoriesURL = "https://fakestoreapi.com/products/categories";
  $.get(categoriesURL)
    .done((category) => {
      category.unshift("all");
      $.each(category, (key, val) => {
        var firstLetter = val.charAt(0).toUpperCase();
        var remainingLetter = val.slice(1).toLowerCase();
        var fullName = firstLetter + remainingLetter;
        $(`<option value="${val}">${fullName}</option>`).appendTo("select");
      });
    })
    .fail((jqXHR, textStatus, errorThrown) => {
      console.error("Error: " + textStatus, errorThrown);
    });
};


// _____________________Load Products_____________________

function LoadProduct(productURL) {
  $("main").html("");

  $.get(productURL)
    .done((product) => {
      $.each(product, (key, val) => {
        // console.log(val);
        $(`
        <div class="card" style="width: 250px; margin-right: 35px; margin-bottom: 45px;">
        <img src="${val.image}" alt="" width="230px" height="190px" class="card-img-top"/>
        <div class="card-header my-0 py-0 text-dark" style="height: 130px;">
            <p>${val.title}</p>
          </div>
          <div class="card-body py-0 my-0 text-dark">
            <dl>
              <dt>Price</dt>
              <dd>
                <span class="text-dark">
                    <strong>&#8377;</strong>
                </span> ${val.price}
              </dd>

              <dt>Category</dt>
              <dd>${val.category}</dd>

              <dt>Rating</dt>
              <dd>
                <span class="bi bi-star-fill" style="color: #FF9529"></span>
                ${val.rating.rate} [${val.rating.count}]
              </dd>
            </dl>
          </div>

          <div class="card-footer text-center text-dark">
            <button name="${val.id}" id="AddCart" class="btn btn-danger"> <span class="bi bi-cart2"></span> Add to Cart</button>
          </div>
      </div>
    `).appendTo("main");
      });
    })
    .fail((jqXHR, textStatus, errorThrown) => {
      console.error("Error: " + textStatus, errorThrown);
    });
};


// _____________________Add To Cart_____________________
var productCartArray = [];

function GetCartLength() {
  $("#lblCount").html(`
    ${productCartArray.length}
  `);
};

function AddToCart() {
  $(document).on("click", "#AddCart", (event) => {
    $.get(`https://fakestoreapi.com/products/${event.target.name}`)
    .done((product) => {
      productCartArray.push(product);
      GetCartLength();
    })
    .fail((jqXHR, textStatus, errorThrown) => {
      console.error("Error: " + textStatus, errorThrown);
    })
    
  })
};


// const showCart = () => {
//   document.querySelector("tbody").innerHTML = "";
//   for(var item of productCartArray){
//     console.log(item)
//     var tr = document.createElement("tr");
//     var tdTitle = document.createElement("td");
//     var tdPrice = document.createElement("td");
//     var tdPreview = document.createElement("td");

//     tdTitle.innerHTML = item.title;
//     tdPrice.innerHTML = item.price;
//     tdPreview.innerHTML = `
//       <img src="${item.image}" alt="" width="50" height="50"/>
//     `;

//     tr.appendChild(tdTitle);
//     tr.appendChild(tdPrice);
//     tr.appendChild(tdPreview);
    
//     document.querySelector("tbody").appendChild(tr);
//   }
// };


// $(function() {
//   $("#cart").click(() => {

//     // Clearing the existing table rows
//     $(".tableBody").empty();

//     $.each(productCartArray, (key, val) => {
//       console.log(val);
//       var newRow = $(`
//       var tr = document.createElement("tr");
//       var tdTitle = document.createElement("td");
//       var tdPrice = document.createElement("td");
//       var tdPreview = document.createElement("td");
  
//       tdTitle.innerHTML = item.title;
//       tdPrice.innerHTML = item.price;
//         <img src="${val.image}" width="50" height="50"/>
//         tdPreview.innerHTML = ""
  
//       tr.appendTo("tdTitle");
//       tr.appendTo("tdPrice");
//       tr.appendTo("tdPreview");  
    
//     document.querySelector("tbody").appendTo("tr");
//    `);

//    $(".tableBody").append(newRow);
//     })
//   })
// })


// $(function() {
//   $("#cart").click(() => {
//     // Clearing the existing table rows
//     $(".tableBody").empty();

//     $.each(productCartArray, (key, val) => {
//       console.log(val);

//       // Create a new row and table data cells
//       var tr = $("<tr>");
//       var tdTitle = $("<td>");
//       var tdPrice = $("<td>");
//       var tdPreview = $("<td>");

//       // Set the content for each cell
//       tdTitle.text(val.title);
//       tdPrice.text(val.price);
//       tdPreview.html(`<img src="${val.image}" width="50" height="50"/>`);

//       // Append the cells to the row
//       tr.append(tdTitle);
//       tr.append(tdPrice);
//       tr.append(tdPreview);

//       // Append the row to the table body
//       $(".tableBody").append(tr);
//     });
//   });
// });

// $(function() {
//   $("#cart").click(() => {
//     // Clear the existing table rows
//     $(".tableBody").empty();

//     $.each(productCartArray, (key, val) => {
//       // Create a new row
//       var newRow = $("<tr>");

//       // Create table data cells and set their content
//       var tdTitle = $("<td>").text(val.title);
//       var tdPrice = $("<td>").text(val.price);
//       var tdPreview = $("<td>").html(`<img src="${val.image}" width="50" height="50"/>`);

//       // Append cells to the row
//       newRow.append(tdTitle, tdPrice, tdPreview);

//       // Append the row to the table body
//       $(".tableBody").append(newRow);
//     });
//   });
// });

$(function() {
  $("#cart").click(() => {
    // Clear the existing table rows
    $(".tableBody").empty();

    // Loop through the productCartArray and add rows to the table
    $.each(productCartArray, (key, val) => {
      // Create a new row
      var newRow = $("<tr>");

      // Create table data cells and set their content
      var tdTitle = $("<td>").text(val.title);
      var tdPrice = $("<td>").text(val.price);
      var tdPreview = $("<td>").html(`<img src="${val.image}" width="50" height="50"/>`);

      console.log(`Title :- ${val.title}`);
      console.log(`Price :- ${val.price}`);
      console.log(`Image :- ${val.image}`);

      // Append cells to the row
      newRow.append(tdTitle, tdPrice, tdPreview);
      console.table(`newRow :- ${$.each(newRow, (key, val) => {
        console.log(val);
      })}`);

      // Append the row to the table body
      $(".tableBody").append(newRow);
    });
  });
});




// _____________________Main Function_____________________

$(function () {
  Toggler();
  LoadCategory();
  LoadProduct("https://fakestoreapi.com/products");
  
  $("select").change(() => {
    if($("select").val() == "all"){
      LoadProduct("https://fakestoreapi.com/products");
    }else{
      LoadProduct(`https://fakestoreapi.com/products/category/${$("select").val()}`)
    }
  });

  AddToCart();
});