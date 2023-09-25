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

const LoadTime = () => {
    var now = new Date();
    var time = now.toLocaleTimeString();
    document.getElementById("watch").innerHTML = `${time}`;
};

var currentTime;
const bodyload = () => {
    currentTime = setInterval(LoadTime, 1000);
    LoadProduct();
    PlaySlider();
};

const PlayClick = () => {
    bodyload();
};

const PauseClick = () => {
    // alert("Hello from Pause");
    clearInterval(currentTime);
};

// ------------------------------------------------------------

var count = 0;
const LoadProduct = () => {
    count++;

    var url = `https://fakestoreapi.com/products/${count}`;
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((product) => {
        document.getElementById("productTitle").innerHTML = `${product.title}`;
        document.getElementById("product").innerHTML = `
            <img src="${product.image}" height="400px" width="100%" style="background: transparent"/>
        `;

        document.getElementById("price").innerHTML = `${product.price}`;
        document.getElementById("rate").innerHTML = `${product.rating.rate} [${product.rating.count}]`;
    })
    .catch((error) => {
        console.error(error);
    });
};

var Slider;
const PlaySlider = () => {
    Slider = setInterval(LoadProduct, 5000);
    LoadProduct();
};

const StopSlider = () => {
    clearInterval(Slider);
}