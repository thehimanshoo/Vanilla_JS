"use strict"

const backgroundChanger = () => {
    var body = document.querySelector("body");
    body.classList.toggle("dark-color");
};

const bodyload = () =>{
    const WeekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const Months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

    var currentDate = new Date();
    var weekDay = currentDate.getDay();
    var date = currentDate.getDate();
    var month = currentDate.getMonth();
    var year = currentDate.getFullYear();
    var hours = currentDate.getHours();
    console.log(year);


    if(hours>=0 && hours <= 12){
        document.getElementById("msg").innerHTML = "Good Morning";
    }else if(hours > 12 && hours <= 17){
        document.getElementById("msg").innerHTML = "Good Afternoon";
    }else{
        document.getElementById("msg").innerHTML = "Good Evening";
    }
    document.getElementById("lblDate").innerHTML = `${WeekDays[weekDay]},&nbsp; ${date}-${Months[month]}-${year}&nbsp;`;
};

setInterval(myTime, 1000);

function myTime() {
    var time = new Date().toLocaleTimeString();
    document.getElementById("lblTime").innerHTML = time;
};

