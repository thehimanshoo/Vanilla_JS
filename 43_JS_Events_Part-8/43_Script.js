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



//  ___________ Form Events Examples _______________

const submitClick = (e) => {
    // alert("submit button clicked");
    document.write("__________________________Properties and TypeOf Submit Event__________________________" + "<br>" + "<br>");
    for (var properties in e) {
        // document.write(properties + "<br>");
        document.writeln(`${properties} = ${typeof properties} <br>`);
    }
    document.write("<br>" + "<br>")

    document.write("__________________________Value holding Properties of Submit Event__________________________" + "<br>" + "<br>")
    document.writeln("submitter - ", e.submitter.value + "<br>");
    document.writeln("timeStamp - ", e.timeStamp + "<br>");
    document.writeln("type - ", e.type + "<br>");
    document.writeln("target - ", e.target + "<br>");
    document.writeln("currentTarget - ", e.currentTarget + "<br>");
    document.writeln("eventPhase - ", e.eventPhase + "<br>");
    document.writeln("bubbles - ", e.bubbles + "<br>");
    document.writeln("cancellable - ", e.cancellable + "<br>");
    document.writeln("defaultPrevented - ", e.defaultPrevented + "<br>");
    document.writeln("composed - ", e.composed + "<br>");
    document.writeln("srcElement - ", e.srcElement + "<br>");
    document.writeln("returnValue - ", e.returnValue + "<br>");
    document.writeln("cancelBubble - ", e.cancelBubble + "<br>");
};


//    Submiting form dynamically after change in option

const submitForm = () => {
    var Uname = document.getElementById("Uname").value;
    var Pass = document.getElementById("Pass").value;
    var city = document.getElementById("city").value;

    var formDetails = {
        Username : Uname,
        Password : Pass,
        City : city
    };
    document.getElementById("dynamicForm").submit();
    alert(JSON.stringify(formDetails));
};