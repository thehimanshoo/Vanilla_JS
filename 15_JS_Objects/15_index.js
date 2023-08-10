"use strict";

const fetchClick = () => {
  fetch("../data/data.json")
    .then((response) => {
      return response.json();
    })
    .then((datas) => {
      for (var obj of datas) {
        var tr = document.createElement("tr");
        // console.table(obj);
        for (var data in obj) {
          var td = document.createElement("td");
          td.innerHTML = obj[data];
          tr.appendChild(td);
          
          document.querySelector("tbody").appendChild(tr);
        }
      }
    });
};