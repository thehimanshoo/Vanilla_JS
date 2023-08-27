"use strict"
var UserDetails = [
    {
        Username : "john@gmail.com",
        Mobile : "8579246589",
        Password : "John@123"
    },

    {
        Username : "david@gmail.com",
        Mobile : "9248685468",
        Password : "David@123"
    },
    {
        Username : "garry@gmail.com",
        Mobile : "9035487289",
        Password : "Garry@123"
    },
    {
        Username : "marry@gmail.com",
        Mobile : "8804524770",
        Password : "Marry@123"
    }
];

const ChangeTheme = () => {
    var body = document.body;
    body.classList.toggle("dark-color");
}

const bodyload = ()=> {
    document.getElementById("txtUsername").value = "";
    document.getElementById("txtPassword").value = "";
};

var Flag = "";
var index = null;

const verifyUsername = () => {
    var userName = document.getElementById("txtUsername").value;
    var msg = document.getElementById("usernameErr");

    for(var users of UserDetails){
        if(userName == ""){
            msg.innerHTML = "Enter the username".fontcolor("red");
        }else{
            if(users.Username === userName){
                document.getElementById("usernameWrapper").style.display = "none";
                document.getElementById("passwordWrapper").style.display = "block";

                index = UserDetails.findIndex(checkUsername);

                if(index !== -1){
                    console.log(index);
                }else{
                    console.log("User not found")
                }

                break;
            }else if(users.Mobile === userName){
                document.getElementById("usernameWrapper").style.display = "none";
                document.getElementById("passwordWrapper").style.display = "block";
                index = UserDetails.findIndex(userName);
                console.log(index);
                break;
            }else{
                msg.innerHTML = `Invalid username`.fontcolor("red");
            }
        }
    }
};

const checkUsername = (userIndex) => {
    var userName = document.getElementById("txtUsername").value;
    return userIndex === userName;
}

const loginClick = () => {
    var password = document.getElementById("txtPassword").value;
    var msg = document.getElementById("pwdErr");
    
    for(var users of UserDetails){
        if(users.Password === password){
            msg.innerHTML = "Login Success !!".fontcolor("green");
            return;
        }else{
            msg.innerHTML = "Invalid Password !!".fontcolor("red");
        }
    }
};