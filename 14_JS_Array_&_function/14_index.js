var cities = ["delhi", "hyderabad", "chennai"];

const loadCity = () => {
  // Removing the existing value from duplicacy
  document.querySelector("select").innerHTML = "";
  // Removing the value of input box after click add-button
  document.getElementById("txtCity").value = "";

  for (var city of cities) {
    // console.log(city);
    capitalizeFirstLetter(city);
  }
};

const bodyload = () => {
  loadCity();
  // capitalizeFirstLetter();
  GetCount();
};

//  Add Button Logic
const addClick = () => {
  var txtCity = document.getElementById("txtCity").value.toLowerCase();
  if (cities.indexOf(txtCity) == -1) {
    cities.push(txtCity);
    // alert(`${txtCity} added to the list successfully..!!`);
    loadCity();
  } else {
    alert(`${txtCity} is already present in the list..!!`);
  }
  GetCount();
};

// Delete Button Logic
const deleteClick = () => {
  var selectedCity = document.querySelector("select").value;
  var selectedIndex = cities.indexOf(selectedCity);
  var flag = confirm(
    `Are you sure..? \n you want to delete ${selectedCity}..?`
  );
  if (flag == true) {
    cities.splice(selectedIndex, 1);
    loadCity();
  }
  GetCount();
};

// Authentication to City
const capitalizeFirstLetter = (word) => {
  var firstLetter = word.charAt(0).toUpperCase();
  var restOfWord = word.slice(1).toLowerCase();
  var capitalizedWord = firstLetter + restOfWord;

  var option = document.createElement("option");
  option.value = word;
  option.text = capitalizedWord;
  document.querySelector("select").appendChild(option);
  return capitalizedWord;
};

// Algorythm for sorting Alphabetical order wise
const sorting = () => {
    document.querySelector("select").innerHTML = "";

  var sortData = cities.sort();
  for (var data of sortData) {
    // console.log(data);

    var firstLetter = data.charAt(0).toUpperCase();
    var restOfWord = data.slice(1).toLowerCase();
    var capitalizedWord = firstLetter + restOfWord;

    var option = document.createElement("option");
    option.value = data;
    option.text = capitalizedWord;
    document.querySelector("select").appendChild(option);
  }
};

// Algorythm for reverse sorting
const reverseSorting = () => {
    document.querySelector("select").innerHTML = "";

    var sortData = cities.sort();
    var reverseData = sortData.reverse();
    for (var data of reverseData) {
    //   console.log(data);
  
      var firstLetter = data.charAt(0).toUpperCase();
      var restOfWord = data.slice(1).toLowerCase();
      var capitalizedWord = firstLetter + restOfWord;
  
      var option = document.createElement("option");
      option.value = data;
      option.text = capitalizedWord;
      document.querySelector("select").appendChild(option);
    };
};

const clearAll = () => {
  document.querySelector("select").innerHTML = "";
  GetCount();
};

const restore = () => {
  loadCity();
  GetCount();
};

const GetCount = () => {
  document.getElementById(
    "cityCount"
  ).innerHTML = `Number of Cities in the list :- ${cities.length}`;
};
