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



//  ___________ Touch Events Examples _______________

const TouchMoveEvent = (e) =>{
    var flag = document.getElementById("touchMove");
            flag.style.position = "fixed";
            flag.style.left = e.touches[0].clientX + "px";
            flag.style.top = e.touches[0].clientY + "px";
};


const TouchStartEvent = (id) => {
    var msg = document.querySelector("span");

    switch (id) {
        case "suitRoom":
            msg.innerHTML = "Hotel Suit Room"
            break;
    
            case "locker":
            msg.innerHTML = "Hotel Locker Room"
            break;
    };
    
};
