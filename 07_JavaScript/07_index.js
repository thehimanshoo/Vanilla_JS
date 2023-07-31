const verifyCard = () => {
  var cardNumber = document.getElementById("txtCard").value;
  var pic = document.getElementById("pic");

  if (cardNumber.startsWith("4444")) {
    pic.src = "../Image/RuPay.png";
  } else if (cardNumber.startsWith("5555")) {
    pic.src = "../Image/Visa.png";
  } else if (cardNumber.startsWith("6666")) {
    pic.src = "../Image/Mastercard.png";
  } else if (cardNumber.length < 4) {
    pic.src = "";
  }
};

const verifyEmail = () => {
  var txtEmail = document.getElementById("txtEmail").value;
  var errMsg = document.getElementById("errMsg");

  if (txtEmail.length > 0) {
    if (txtEmail.indexOf("@") == -1) {
      errMsg.innerText = "Enter a proper email !!";
      errMsg.className = "text-warning";
    } else if (txtEmail.endsWith("outlook.com")) {
      errMsg.innerText = "Successfully Registered !!";
      errMsg.className = "text-success";
    } else {
      errMsg.innerText = "Invalid Email - Only outlook account allowed !!";
      errMsg.className = "text-danger";
    }
  } else {
    errMsg.innerText = "";
  }
};

const varifyPassword = () => {
  var Password = document.getElementById("txtPass").value;
  var errMsg = document.getElementById("errPass");
  const regExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[a-zA-Z\d!@#$%^&*()]{8,}$/;
  var meter = document.getElementById("meter");

  const setMeterValue = (min, max, value, low, high) => {
    meter.min = min;
    meter.max = max;
    meter.value = value;
    meter.low = low;
    meter.high = high;
  };

  if (Password.match(regExp)) {

    if (Password.length == 8) {
      errMsg.innerHTML = "Poor Password !!";
      errMsg.className = "text-danger";
      setMeterValue(1, 100, 100, 60, 40);

    } else if (Password.length > 8 && Password.length < 11) {
      errMsg.innerHTML = "Weak Password !!";
      errMsg.className = "text-warning";
      setMeterValue(1, 100, 100, 40, 70);

    } else if (Password.length >= 12) {
      errMsg.innerHTML = "Strong Password !!";
      errMsg.className = "text-success";
      setMeterValue(1, 100, 100, 0, 0);

    } else if (Password.length == 0) {
      errMsg.innerHTML = "";
      setMeterValue(1, 100, 0, 0, 0);
    };

  } else {
    errMsg.innerHTML =
      "<ul>Password should contain at Least :- <li>One Uppercase letter</li> <li>One Lowercase letter</li> <li>One Number</li> <li>One Special Character</li></ul>";
    errMsg.className = "text-danger";
  };
};
