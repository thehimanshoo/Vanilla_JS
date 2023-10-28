// Logic to Load Page in PageWrapper class of Index.html
function LoadView(page) {
    // $.get(page)
    // .success((res) => {
    //     $("main").html(res);
    // })
    // .error((JqXHR) => {
    //     console.error(`Error : ${JqXHR.status} ${JqXHR.statusText}`);
    // });

    // This is the another way to fetch data in jQuery Ajax

    $.ajax({
        method: "get",
        url: page,
        success: (res) => {
            $("#PageWrapper").html(res);
        },
    });


    // Logic to add AddTocart.html to its Wrapper Section of Index.html page
    $.ajax({
        method: "get",
        url: "53_AddToCart.html",
        success: (addToCartPage) => {
            $("#AddToCartWrapper").html(addToCartPage);
        },
        error: (JqXHR) => {
            console.error(`Error : ${JqXHR.status} ${JqXHR.statusText}`);
        }
    });

    
};



// Logic to Load Products to the Products.html page
const LoadProduct = (URL) => {
    $.ajax({
        method: "get",
        url: URL,
        success: (products) => {
            $.each(products, (key, product) => {
                $(`
                    <div class="card" style="width: 250px; margin-right: 35px; margin-bottom: 45px;">
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
    <button name="${product.id}" id="AddToCart" class="btn btn-danger"> <span class="bi bi-cart2"></span> Add to Cart</button>
  </div>
                        </div>
                `).appendTo("#ProductCatlog");
            });
        },
        error: (JqXHR) => {
            console.error(`Error : ${JqXHR.status} ${JqXHR.statusText}`);
        }
    });
};


// Logic to Validate Login Page
const LoginPage = () => {
    var peopleData = [
        { Username: "John", Password: "john@11" },
        { Username: "David", Password: "david@11" },
        { Username: "Mark", Password: "mark@11" },
        { Username: "Harry", Password: "harry@11" },
        { Username: "Marrie", Password: "marrie@11" }
    ];

    $(document).on("click", "#LoginFormButton", () => {
        var name = $("#uname").val();
        var pass = $("#password").val();

        var loginSuccessful = false; // Flag to track if login was successful

        $.each(peopleData, (key, user) => {

            if (user.Username === name && user.Password === pass) {
                $.cookie("username", name);
                $("#User").text(name);
                LoadProduct("https://fakestoreapi.com/products");
                LoadView("53_Products.html");

                // Setting the flag to true and break out of the loop
                loginSuccessful = true;
                return false; // exit the $.each() loop
            }
        });

        if (!loginSuccessful) {
            // If login was not successful for any user
            $("#User").text("");
            LoadView("53_Error.html");
        };


        // Logic for Try Again button
        $(document).on("click", "#tryAgain", () => {
            LoadView("53_Login.html");
        });
    });
};


// Logic to load Categories to the selectBox
const LoadCategory = () => {
    $(document).ready(function () {
        $.ajax({
            method: "get",
            url: "https://fakestoreapi.com/products/categories",
            success: (categories) => {
                categories.unshift("all");

                $.each(categories, (key, category) => {
                    var firstLetter = category.charAt(0).toUpperCase();
                    var remainingLetter = category.slice(1).toLowerCase();

                    $(`
                    <option name="${category}">${firstLetter + remainingLetter}</option>
                `).appendTo("select");
                })
            },
            error: (JqXHR) => {
                console.error(`Error : ${JqXHR.status} ${JqXHR.statusText}`);
            }
        });


        // Logic to change Products according to the category value
        $("select").change(function () {
            var categoryName = $("select").val();
            var prevName = categoryName.toLowerCase();
            $("#ProductCatlog").html("");

            if (prevName == "all") {
                LoadProduct(`https://fakestoreapi.com/products`);
            } else {
                LoadProduct(`https://fakestoreapi.com/products/category/${prevName}`);
            }
        })
    });
};


//  jQuery main function
$(function () {
    LoadCategory();
    LoadView("53_Home.html");

    // Adding functionality to Toggle Button
    $(document).on("click", "#toggle", () => {
        // alert("Toggler clicked");
        $("body").toggleClass("themeChange");
    });    


    // Logic to load Products according to the dropdown option
    $(document).on("click", "button", (event) => {
        var name = event.target.name;

        switch (name) {
            case "btnHome":
                // console.log("Home");
                LoadView("53_Home.html");
                break;

            case "btnLogin":
                LoadView("53_Login.html");
                break;

            case "Login":
                LoginPage();
                break;

            case "btnProducts":
                // console.log("Products");
                if($.cookie("username")== undefined){
                    LoadView("53_Login.html");
                }else{
                    LoadProduct("https://fakestoreapi.com/products");
                    LoadView("53_Products.html");
                }
                
                break;

            case "btnLogout":
                $.removeCookie("username");
                $("#User").text("");
                LoadView("53_Login.html");
                break;
        };
    });

    // Logic to Add to Cart
    var AddToCartArray = [];
    $(document).on("click", "#AddToCart", (event) => {
        var productID = event.target.name;
        $.ajax({
            method: "get",
            url: `https://fakestoreapi.com/products/${productID}`,
            success: (product) => {
                AddToCartArray.push(product);
                $("#lblCount").text(AddToCartArray.length);
            },
            error: (JqXHR) => {
                console.error(`Error : ${JqXHR.status} ${JqXHR.statusText}`);
            }
        });
    });


    // Logic to show data, onclick of Your Cart
    
    $(document).on("click", "#ShowCart", () => {
        let tableContent = "";

        if (AddToCartArray.length > 0) {

            function checkCart() {
                $.each(AddToCartArray, (key, product) => {
                    tableContent += `
                        <tr>
                            <td>${product.title}</td>
                            <td>${product.price}</td>
                            <td><img src="${product.image}" alt="" height="50" width="50"></td>
                        </tr>
                    `;
                });
    
                 // Update the table body with the tableContent
                $(".table tbody").html(tableContent);

                // Show the modal
                $("#targetCart").modal("show");
            }
            checkCart();
        } else {
            alert("Cart is empty... Add items to the cart.");
        }

    });
});
