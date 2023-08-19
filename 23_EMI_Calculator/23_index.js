"use strict"

const bodyload = () => {
    
    
};

const txtAmount = () => {
    var lblAmount = document.getElementById("lblAmount");
    var txtAmount = document.getElementById("txtAmount").value;
    lblAmount.innerHTML = `
        <b>&#8377; &nbsp;${txtAmount}</b>
    `;
};

const txtYears = () => {
    var lblYears = document.getElementById("lblYears");
    var txtYears = document.getElementById("txtYears").value;
    lblYears.innerHTML = `
        <b>${txtYears}</b>
    `;
    
};

const txtRate = () => {
    var lblRate = document.getElementById("lblRate");
    var txtRate = document.getElementById("txtRate").value;
    lblRate.innerHTML = `
        <b>${txtRate}%</b>
    `;
};

const CalculateEMI = () => {
    var amount = document.getElementById("txtAmount").value;
    var years = document.getElementById("txtYears").value;
    var rate = document.getElementById("txtRate").value;

   var P = parseFloat(amount);
   var n = parseInt(years)*12;
   var r = parseFloat(rate)/12/100;


   var EMI = P * r/(1-(Math.pow(1/(1+r), n)));
   var msg = document.getElementById("txtEMI");
   msg.innerHTML = `You'll have to pay <b class="text-primary">&#8377; ${Math.round(EMI)}</b> each month`;
}