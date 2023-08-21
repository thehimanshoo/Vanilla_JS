"use strict"

const changeStock = () => {
    var optStock = document.getElementById("optStock");
    var lblStock = document.getElementById("lblStock");

    lblStock.innerHTML = (optStock.checked)? "Available": "Out of Stock"
    // if(optStock.checked){
    //     lblStock.innerHTML = "Available";
    // }else{
    //     lblStock.innerHTML = "Out of Stock";
    // }

};

const ButtonClick = () => {
   var txtButton = document.getElementById("button");
   txtButton.innerHTML = ((txtButton.innerHTML) === "Show")? "Hide" : "Show"

  var pic = document.getElementById("pic");
  pic.style.display = ((pic.style.display) === "none")? "block" : "none"
}

const loginClick = () => {
        var msg = document.getElementById("authMsg");
        var txtUsername = document.getElementById("username").value;
        var txtPassword = document.getElementById("password").value;

    fetch("./24_data.json")
    .then((response) => {
        return response.json()
    })
    .then((users) => {
        
        for(var user of users){
            console.log(user)
            if(user.userName === txtUsername && user.Password === txtPassword){
                msg.innerHTML = "Login Successfull..!!";
                msg.className = "text-success fw-200";
                break;
            }else{
                msg.innerHTML = "Invalid Credential..!!";
                msg.className = "text-danger fw-200";
            }
        }
    })
    .catch((error) => {
        console.error(error);
    })
}