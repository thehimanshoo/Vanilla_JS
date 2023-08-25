"use strict"

var UserDetails = [
    {
        Username : "john@gmail.com",
        Password : "John@123"
    },

    {
        Username : "david@gmail.com",
        Password : "David@123"
    },
    {
        Username : "garry@gmail.com",
        Password : "Garry@123"
    },
    {
        Username : "marry@gmail.com",
        Password : "Marry@123"
    }
];

const LoginClick = () => {
    var username = document.getElementById("txtUsername").value;
    var password = document.getElementById("txtPassword").value;
    var msg = document.getElementById("lblMsg");

    for(var users of UserDetails){
        if(username == ""){
            msg.innerHTML = "Enter Username First !!".fontcolor("orange");
            break;
        }else{
            if(password == ""){
                msg.innerHTML = "Enter Password First !!".fontcolor("orange");
                break;
            }else{
                if(users.Username === username){
                    if(users.Password === password){
                        msg.innerHTML = "Login Success !!".fontcolor("green");
                        break;
                    }else{
                        msg.innerHTML = "Invalid Password !!".fontcolor("red");
                        break;
                    }
                }else{
                    msg.innerHTML = "Invalid Username !!".fontcolor("red");
                }
            }
        }
    }
}

const bodyload = () => {
    document.getElementById("txtUsername").value = "";
    document.getElementById("txtPassword").value = "";
}