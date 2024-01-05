
// function to load page
const LoadPage = (pageUrl) => {
    $.ajax({
        method: "get",
        url: pageUrl,
        success: (data) => {
            $("#targetSection").html(data);
        }
    });
};

document.addEventListener('DOMContentLoaded', function () {
    LoadPage("./home.html");

    // 1.  Home button click logic
    $("#navHome").click(() => {
        LoadPage("./home.html");

    })

    // 2.  Customer button click logic
    $("#navCustomer").click(() => {
        LoadPage("./customer.html");

    })

    // 2.1  Register button of customer page button click logic
    $(document).on("click", "#navbtnRegister", () => {
        LoadPage("./Customer_Register.html");
    });

    // 2.1.1  Register form button click logic
    $(document).on("click", "#formBtnRegister", (event) => {
        event.preventDefault();

        let client = {
            UserId: $("#txtUserId").val(),
            UserName: $("#txtUsername").val(),
            Password: btoa($("#txtPwd").val()),
            Age: parseInt($("#txtAge").val()),
            Email: $("#txtEmail").val(),
            Mobile: $("#txtMobile").val(),
        };
        // alert(JSON.stringify(client));

        $.ajax({
            method: "post",
            url: "http://localhost:4000/registercustomer",
            contentType: "application/json", // Set content type to JSON
            data: JSON.stringify(client), // Convert the client object to JSON
            success: () => {
                alert("Registered Successfully !!");
            },
            error: (err) => {
                alert(err);
            }
        });
    });


    // 2.2  Customer Page 'Login' button click logic
    $(document).on("click", "#navbtnLogin", () => {
        LoadPage("./LoginForm.html");
    });


    // 2.2.1  Login Page 'Login' button logic
    $(document).on("click", "#formBtnLogin", (event) => {
        event.preventDefault();
    
        const userDetails = {
            UserId: $("#txtLoginId").val(),
            Password: btoa($("#appLoginPwd").val()),
            RememberMe: $("#loginChk").prop("checked"),
        };
        console.log(JSON.stringify(userDetails));
    
        $.ajax({
            method: "get",
            url: "http://localhost:4000/customers",
            success: (data) => {
                try {
                    const userData = data.filter((user) => user.UserId === userDetails.UserId && user.Password === userDetails.Password);
    
                    if (userData.length > 0) {
                        alert("Login Successful...");
                        LoadPage("products.html");
                    } else {
                        alert("Invalid Credentials !!");
                    };

                } catch (error) {
                    alert(error);
                }
            },
            error: (err) => {
                console.error(err);
            }
        });
    });
    


    // Admin button click logic
    $("#navAdmin").click(() => {
        LoadPage("./admin.html");

    });


    // Products button click logic
    $("#navProducts").click(() => {
        LoadPage("./products.html");

    });

});