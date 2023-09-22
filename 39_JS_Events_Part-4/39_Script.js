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

const mouseMove = (id) => {
    // document.getElementById("msg").style.color = id;
    var text = document.getElementById("msg");

    switch (id) {
        case "red":
            text.style.color = "red";
            text.style.textShadow = "0 6px 8px green";
            break;

        case "green":
            text.style.color = "green";
            text.style.textShadow = "0 6px 8px blue";
            break;

        case "yellow":
            text.style.color = "yellow";
            text.style.textShadow = "0 6px 8px red";
            break;

        case "blue":
            text.style.color = "blue";
            text.style.textShadow = "0 6px 8px red";
            break;

        case "white":
            text.style.color = "white";
            text.style.textShadow = "0 6px 8px red";
            break;
    };

};

const validateCaps = (event) => {
    var pwdMsg = document.getElementById("pwdMsg");

    if(event.charCode >= 65 && event.charCode <= 90 || event.which >= 65 && event.which <= 90){
        pwdMsg.style.display = "block";
    }else{
        pwdMsg.style.display = "none";
    }
};

const showPass = () => {
    var pass = document.getElementById("password");

    (pass.type = (pass.type === "password" ? "text" : "password"));

}
