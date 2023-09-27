"use strict"
/* 
                               jQuery DOM Methods
                            -------------------------

        text()          :  innerText
        html()          :  innerHTML
        val()           :  Value
        attr()          :  Attribute
        prop()          :  Property
        css()           :  Styles
        append()        :  Adding Element [After/Right]
        appendTo()      :  Adding to specific Element
        prepend()       :  Adding Element [Before/Left]
        before()        :  Adding above
        after()         :  Adding below
        each()          :  Iterator (used for both properties and values)
 */

const modeChange = () => {
    var body = document.body;
    body.classList.toggle("dark-mode");
};

$(function () {
    $("h1").text("jQuery");
    $("#msg").text("Write Less Do More !!");
    $(".lblMsg").text("It is a Liabrary for building UI (FrontEnd Development) only !!");
});

// ____________________________Examples of jQuery DOM methods____________________________

$(function () {
    $(".card-header").append("jQuery methods Examples").css("fontWeight", "bold");
    $(".card-body").append("jQuery !!");
    $(".card-body").prepend("Welcome to ");
    $(".card-body").prepend("Hello ! ");
    $(".card-body").before("jQuery !!");
    $(".card-body").after("jQuery method !!");

    $("img").attr("src", "../Image/lady1.webp");
});


// jQuery Form

$(function() {
    $("button").click(function() {

        if($("#username").val() != "" && $("#password").val() != ""){
            $("#txtName").html(`Hello ! ${$("#username").val()} <br>`);
            $("#txtPass").html(`Your Password is :- ${$("#password").val()}`);
        }else{
            $("#txtName").html(`Kindly fill both section to submit the form !!`).css("color", "red");
        }
    });
});

$(function() {
    $("select").change(function() {
        $("#lblCity").html(`You have selected :- ${$("select").val()}`).css("color", "green");
    });
});