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

const mouseOver = () => {
    document.getElementById("img1").src = "../Image/Deluxe_Room.jpg";
    document.getElementById("opt1").innerHTML = `Deluxe Room`;
};

const mouseOut = () => {
    document.getElementById("img1").src = "../Image/Suite_Room.jpg";
    document.getElementById("opt1").innerHTML = `Suite Room`;
};

const mouseUp = () => {
    document.getElementById("img2").src = "../Image/AC.png";
    document.getElementById("opt2").innerHTML = `AC`;
};

const mouseDown = () => {
    document.getElementById("img2").src = "../Image/Hotel_Locker.png";
    document.getElementById("opt2").innerHTML = `Locker`;
};

const mouseEnter = () => {
    document.getElementById("img3").src = "../Image/Mastercard.png";
    document.getElementById("opt3").innerHTML = `Mastercard`;
};

const mouseLeave = () => {
    document.getElementById("img3").src = "../Image/RuPay.png";
    document.getElementById("opt3").innerHTML = `RuPay Card`;
};

const mouseMove = (e) => {
    document.getElementById("img4").src = "../Image/KFC_Loader_Gif.gif";
    document.getElementById("opt4").innerHTML = `KFC_Loader_Gif`;
};

const dblClick = () => {
    document.getElementById("img4").src = "../Image/KFC_Theme.png";
    document.getElementById("opt4").innerHTML = `KFC_Theme`;
};

// performing special functionality of "onmousemove" event
const Move = (e) => {
    var flag = document.getElementById("img5");
    flag.style.position = "fixed";
    flag.position.left = `${e.clientX}` + "px";
    flag.position.top = `${e.clientY}` + "px";
}

