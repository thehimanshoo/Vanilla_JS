"use strict";
const registerSubmit = () => {
    
  // Customer Info
  document.getElementById("optCustomerName").innerHTML =
    document.getElementById("txtName").value;
  document.getElementById("optCheckInDate").innerHTML =
    document.getElementById("txtDate").value;
  document.getElementById("optTotalDays").innerHTML =
    document.getElementById("txtDays").value;
  document.getElementById("optTotalPerson").innerHTML =
    document.getElementById("txtPerson").value;

  var days = document.getElementById("txtDays").value;
  var person = document.getElementById("txtPerson").value;

  // Select Room Type
  var RadioDeluxe = document.getElementById("radioDelux");
  var RadioSuite = document.getElementById("radioSuite");

  // Select Amenities
  var SelectAC = document.getElementById("optAC");
  var SelectLocker = document.getElementById("optLocker");

  var RoomPrice = 0;
  var AmenitiesPrice = 0;

  if (RadioDeluxe.checked) {
    document.getElementById("optRoomType").innerHTML = RadioDeluxe.value;
    RoomPrice = 2500;
  }
  if (RadioSuite.checked) {
    document.getElementById("optRoomType").innerHTML = RadioSuite.value;
    RoomPrice = 4000;
  }

  // Amenities Select
  if (SelectAC.checked) {
    document.getElementById("optAmenities").innerHTML +=
      SelectAC.value + "&nbsp;, &nbsp;";
    AmenitiesPrice += 1000;
  }
  if (SelectLocker.checked) {
    document.getElementById("optAmenities").innerHTML += SelectLocker.value;
    AmenitiesPrice += 300;
  }

  // Verifying Person
  var totalPrice = 0;
  if (person > 2) {
    var extraPerson = person - 2;
    var extraPrice = extraPerson * 1000;
    totalPrice = (RoomPrice + AmenitiesPrice + extraPrice) * days;
  }

  var BalanceAmount = totalPrice - document.getElementById("txtAdv").value;
  document.getElementById("optExtraCost").innerHTML = extraPrice;
  document.getElementById("optAdvance").innerHTML =
    document.getElementById("txtAdv").value;
  document.getElementById("optTotal").innerText = totalPrice;
  document.getElementById("optBalanceAmount").innerHTML = BalanceAmount;
};

const validateAmount = () => {
  var advanceAmount = parseInt(document.getElementById("txtAdv").value);

  if (!(advanceAmount >= 1000)) {
    document.getElementById("registerButton").disabled = true;
    document.getElementById("msgAdvance").innerHTML =
      "Avance should not be less than 1000..!!" + "<br>";
  } else {
    document.getElementById("registerButton").disabled = false;
    document.getElementById("msgAdvance").innerHTML = "";
  }
};

const bodyload = () => {
  var advanceAmount = parseInt(document.getElementById("txtAdv").value);

  if (!(advanceAmount >= 1000)) {
    document.getElementById("registerButton").disabled = true;
  } else {
    document.getElementById("registerButton").disabled = false;
  }
};
