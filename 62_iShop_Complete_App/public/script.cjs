
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


// Main function
$(document).ready(() => {
    LoadPage("./Customer_Register.html");

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
    $(document).on("click", "#formBtnRegister", () => {
        let client = {
            UserId: $("#txtUserId").val(),
            UserName: $("#txtUsername").val(),
            Password: $("#txtPwd").val(),
            Age: parseInt($("#txtAge").val()),
            Email: $("#txtEmail").val(),
            Mobile: $("#txtMobile").val(),
        };

        $.ajax({
            method: "post",
            url: "http://localhost:4400/registercustomer",
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
    $(document).on("click", "#btnAppLogin", () => {

        let loginUserData = {
            loginId: $("#txtLoginId").val(),
            loginPwd: $("#appLoginPwd").val(),
            rememberMe: ($("#login-check").is(":checked")) ? true : false
        };

        alert(JSON.stringify(loginUserData))
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