// function to load page
let LoadPage = (pageUrl) => {
    $.ajax({
        method: "get",
        url: pageUrl,
        success: (data) => {
            $("#targetSection").html(data);
        },
        error: (err) => {
            console.error(err);
        }
    });
};

document.addEventListener('DOMContentLoaded', function () {
    LoadPage("./home.html");

    // 1.  Home button click logic
    $("#navHome").click(() => {
        LoadPage("./home.html");
    });

    // 2.  Customer button click logic
    $("#navCustomer").click(() => {
        LoadPage("./customer.html");
    });

    // 2.1  Register button of customer page button click logic
    $(document).on("click", "#navbtnRegister", () => {
        LoadPage("./Customer_Register.html");
    });

    // 2.1.1  Register form button click logic
    $(document).on("click", "#formBtnRegister", (event) => {
        event.preventDefault();
        // alert(clicked);

        let client = {
            UserId: $("#txtUserId").val(),
            UserName: $("#txtUsername").val(),
            Password: btoa($("#txtPwd").val()),
            Age: parseInt($("#txtAge").val()),
            Email: $("#txtEmail").val(),
            Mobile: $("#txtMobile").val(),
        };

        if (!(client.UserId && client.UserName && client.Password && client.Age && client.Email)) {
            return alert("Kindly fill in all the details first!!");
        } else alert(JSON.stringify(client));

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
    $(document).on("click", "#LoginBtn", async (event) => {
        event.preventDefault();

        const loginUser = {
            UserId: $("#txtLoginId").val(),
            Password: btoa($("#appLoginPwd").val())
        };
        // alert(JSON.stringify(user))

        $.ajax({
            method: "get",
            url: "http://localhost:4000/customers",
            success: (data) => {
                const user = data.find(userData => userData.UserId === loginUser.UserId && userData.Password === loginUser.Password);
                if (!user) {
                    alert("Invalid Credentials");
                } else {
                    alert("Login Successful...");
                    $.cookie('UserId', $("#txtLoginId").val());
                    LoadPage("products.html");
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