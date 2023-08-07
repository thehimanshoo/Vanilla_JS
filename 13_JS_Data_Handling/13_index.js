var cities = ["Delhi", "Chandigarh", "Bihar", "Hyderabad", "Chennai"];
for (city of cities) {
  // document.write(city + "<br>");
  var li = document.createElement("li");
  li.innerText = city;
  document.querySelector("ol").appendChild(li);

  // Showing element in select box
  var option = document.createElement("option");
  option.innerText = city;
  document.querySelector("select").appendChild(option);

  // showing the element with checkBox
  var input = document.createElement("input");
  input.type = "checkbox";
  input.value = `${city}`;

  var label = document.createElement("label");
  label.innerHTML = city;

  var br = document.createElement("br");

  document.getElementById("checkBox").appendChild(input);
  document.getElementById("checkBox").appendChild(label);
  document.getElementById("checkBox").appendChild(br);
}

// Displaying the data into a table
// var datas = [
//   { id: 1, First: "Mark", Last: "Otto", handle: "@mdo" },
//   { id: 2, First: "Jacob", Last: "Thornton", handle: "@fat" },
//   { id: 3, First: "Larry", Last: "the Bird", handle: "@twitter" },
// ];

// for(var property in datas[0]){
//   // console.log(property);
//   var th = document.createElement("th");
//   th.scope = "col";
//   th.innerHTML = property;

//   document.getElementById("head").appendChild(th);
// };


// for(var data of datas){
//   var tableBodyRow = document.querySelector("body");
//   for(var property in data){
//     // console.log(data[property]);
    
//     var th = document.createElement("th");
//     th.scope = "row";
//     th.innerText = `${data.id}`;

//     // console.log(data?.id)
//     tableBodyRow.appendChild(th);

//     // var td = document.createElement("td");
//     // td.innerHTML = data[property];
//     // tableBodyRow.appendChild(td);

//   }
// }