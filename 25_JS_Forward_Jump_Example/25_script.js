"use strict"
const bodyload = () => {
    document.getElementById("txtNumber").value = "";
    document.getElementById("txtExp").value = "";
    document.getElementById("txtCVV").value = "";

    chkCardNum();
    chkCardCVV();
    chkCardCVV();
}

var cardDetails = {
    CardNumber : "55555",
    Expiry : "20:07:2025",
    CVV : "1240"
};

function chkCardNum(){
    var cardNumber = document.getElementById("txtNumber").value;
    var msg = document.getElementById("lblCardNumber");
    if(cardDetails.CardNumber === cardNumber){
        document.getElementById("txtExp").disabled = false;
        msg.innerHTML = "Successful..!!";
    }else{
        msg.innerHTML = "Invalid Credential..!!"
    }
}

function chkCardExpiry(){
    var Exp = document.getElementById("txtExp").value;
    var msg = document.getElementById("lblCardExpiry");
    if(cardDetails.Expiry === Exp){
        document.getElementById("txtCVV").disabled = false;
        msg.innerHTML = "Successful..!!"
    }else{
        msg.innerHTML = "Invalid Credential..!!"
    }

}

function chkCardCVV(){
    var cvv = document.getElementById("txtCVV").value;
    var msg = document.getElementById("lblCardCVV");
    if(cardDetails.CVV === cvv){
        document.getElementById("btnSubmit").disabled = false;
        msg.innerHTML = "Successful..!!"
    }else{
        msg.innerHTML = "Invalid Credential..!!"
    }
}

const verifyCard = () => {
    var cardNumber = document.getElementById("txtNumber").value;
    var Exp = document.getElementById("txtExp").value;
    var cvv = document.getElementById("txtCVV").value;
    var modalBody = document.getElementById("modalBody");

    modalBody.innerHTML = `
        <dl class="d-flex flex-row">
            <dt>Card Number :</dt>
            <dd>${cardNumber}</dd>
            <dt>Expiry :</dt>
            <dd>${Exp}</dd>
            <dt>CVV :</dt>
            <dd>${cvv}</dd>
        </dl>
    `;
}