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


const Database = (obj, e) => {
    /* 
    
        "this"  :- It is a predefined keyword in javaScript for function. This keyword is used as parameter in function,
                   it is also a default parameter, used to send the whole "tag" including "Properties" like :- id, name, class, value etc...

        "event" :- It is also predefined keyword in javaScript for function. event keyword is also used as parameter in function,
                   it is also a default parameter, used to send the information of the function like :- "ctrl" key pressed or not etc...
    
    */
    switch (obj.id) {
        case "btnInsert":
            document.querySelector("p").innerHTML = "Insert button has been clicked..";
            break;

        case "btnCreate":
            document.querySelector("p").innerHTML = "Create button has been clicked..";
            break;
            
        case "btnDelete":
            document.querySelector("p").innerHTML = "Delete button has been clicked..";
            break;    
    };
};

const imgClick = (obj, e) => {
    var p = document.querySelector("p");
    p.innerHTML = `
        Id         :  ${obj.id} <br/>
        Class      :  ${obj.className} <br>
        X Position :  ${e.clientX} <br>
        Y Position :  ${e.clientY} <br>
        Ctrl Key   :  ${e.ctrlKey}
    `;

    if(e.ctrlKey){
        window.open("../Image/Suite_Room.jpg");
    }
}
