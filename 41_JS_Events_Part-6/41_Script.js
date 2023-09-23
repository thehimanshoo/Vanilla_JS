"use strict"

/*

    Events are classified into various groups, such as:-

        1.  Mouse Events
        2.  Keyboard Events
        3.  Button Events
        4.  Clipboard Events
        5.  Touch Events
        6.  Timer Events
        7.  Elements State Events
        8.  Miscellaneous Events
        9.  Form Events
        10. Window Events
        11. Document and DOM Events
        12. Custom Events etc...


        ___________ MOUSE EVENTS _______________

        - onclick
        - ondblclick
        - onmouseover
        - onmouseout
        - onmousedown
        - onmouseup
        - onmousemove
        - onmouseenter
        - onmouseleave


        ___________ KEYBOARD EVENTS _______________

        - onkeydown
        - onkeyup
        - onkeypress


         ___________ CLIPBOARD EVENTS _______________

        - oncut
        - oncopy
        - onpaste
        - oncontextmenu  => {fot right click}
        - onselectstart => {fot selection}


         ___________ ELEMENT STATE EVENTS _______________

        - onfocus       : When element gets focus
        - onblur        : When element lost focus
        - onselect      : When user Selects
        - onchange      : When value changes


        ___________ TIMER EVENTS _______________

        - setInterval()
        - clearInterval()
        - setTimeout()
        - clearTimeout()


         ___________ FORM EVENTS _______________

         - onsubmit
         - onreset


          ___________ TOUCH EVENTS _______________

         - ontouchstart
         - ontouchend
         - ontouchmove


*/

// instead of writing function to the body with event "oncontextmenu" for right click we can directly write like this :-

document.oncontextmenu = function(){
    alert("Right click disabled on this page");
    return false;
};

// similarly, instead of passing the function to the body for remaining functionality we can write functions directly

// for CUT
// document.oncut = function(){
//     alert("Cut is disabled on this page");
//     return false;
// }

// // for COPY
// document.oncopy = function(){
//     alert("Copy is disabled on this page");
//     return false;
// };

// // for PASTE
// document.onpaste = function(){
//     alert("Paste is disabled on this page");
//     return false;
// };

// // for SELECT
// document.onselectstart = function(){
//     alert("Select is disabled on this page");
//     return false;
// };


//    ___________ ELEMENT STATE EVENTS Example_______________

const ShowMsg = () => {
    document.getElementById("usrMsg").innerHTML = "Name Max 20 chars";
};

const HideMsg = () => {
    document.getElementById("usrMsg").innerHTML = "";
}

const ShowPass = () => {
    document.getElementById("pwdMsg").innerHTML = "Password Max 16 digit";
};

const HidePass = () => {
    document.getElementById("pwdMsg").innerHTML = "";
};



//    ___________ ELEMENT STATE EVENTS Example (Dynamically adjusting focus)_______________

const verifyName = () => {
    document.getElementById("nameMsg").innerHTML = "Name Max 10 chars";
    var username = document.getElementById("username").value;
    if(username.length >= 10){
        document.getElementById("nameMsg").innerHTML = "";
        document.getElementById("chkPassword").focus();
        document.getElementById("username").disabled = true;
    };
};

const chkPassword = () => {
    
    document.getElementById("passMsg").innerHTML = "Password Max 8 digit";
    var pass = document.getElementById("chkPassword").value;

    if(pass.length >=8){
        document.getElementById("passMsg").innerHTML = "";
        document.getElementById("chkPassword").disabled = true;
    }
}


//  ___________ TIMER EVENTS EXAMPLE_______________

function m1(){
    document.getElementById("timerEvent").innerHTML = "Hello!";
};

function m2(){
    document.getElementById("timerEvent").innerHTML = "How are you..?";
};

function m3(){
    document.getElementById("timerEvent").innerHTML = "Welcome to JavaScript!";
};

var msg1, msg2, msg3;
const bodyload = () => {
    msg1 = setTimeout(m1, 3000);
    msg2 = setTimeout(m2, 5000);
    msg3 = setTimeout(m3, 7000);
};

function ClearClick() {
    clearTimeout(msg2);
};