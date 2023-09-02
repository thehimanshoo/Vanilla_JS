"use strict"

const Toggle = () => {
    var body = document.body;
    body.classList.toggle("dark-mode");
};

class Employee {
    firstName = "";
    lastName = "";
    Department = "";

    print(){
        document.write(`Name : ${this.firstName} ${this.lastName} <br/> Department : ${this.Department} <br/>`);
    };
};

class Admin extends Employee {
    firstName = "John";
    lastName = "Doe";
    Department = "Admin";
    Role = "Admin : Handle the Administration";

    print(){
        super.print();
        document.write(`${this.Role}`);
    };
};

class Manager extends Employee {
    firstName = "Wilson";
    lastName = "Sorio";
    Department = "Manager";
    Role = "Manager : To manage the Company";

    print(){
        super.print();
        document.write(`${this.Role}`);
    };
};

class Developer extends Employee {
    firstName = "Satyendra";
    lastName = "Jain";
    Department = "Developer";
    Role = "Developer : Developing application, fix bugs, resolve errors";

    print(){
        super.print();
        document.write(`${this.Role}`);
    };
};

class Tester extends Employee {
    firstName = "Jack";
    lastName = "Torris";
    Department = "Tester";
    Role = "Tester : Testing application, Finding bugs, Reporting error to the Developer";

    print(){
        super.print();
        document.write(`${this.Role}`);
    };
};

var Employees = new Array(new Admin(), new Manager(), new Developer(), new Tester());
// var department = prompt("Enter Department");

for(var employee of Employees){
    if(employee.Department == department){
        employee.print();
    };
};

document.writeln(`<br/><br/> host : ${location.host} <br/>`);
document.writeln(`port : ${location.port} <br/>`);
document.writeln(`protocol : ${location.protocol} <br/>`);
document.writeln(`hostname : ${location.hostname} <br/>`);
document.writeln(`path : ${location.pathname} <br/>`);
document.writeln(`origin : ${location.origin} <br/>`);
document.writeln(`hash : ${location.hash} <br/>`);

function GetLocation() {

    if(location.protocol !== "http:"){
        document.getElementById("locationData").innerHTML = 
    `
    <br/> <br/>
    
        URL           : ${location.href} <br/>
        Path          : ${location.pathname} <br/>
        protocol      : ${(location.protocol == "http:")? "You are using HTTP Server" : "You are using File System"}
    `;
    }else{
        document.getElementById("locationData").innerHTML = 
    `
    <br/> <br/>
    
        IP Address    : ${location.host} <br/>
        URL           : ${location.href} <br/>
        Path          : ${location.pathname} <br/>
        Port          : ${location.port} <br/>
        protocol      : ${(location.protocol == "http:")? "You are using HTTP Server" : "You are using File System"}
    `;
    }
}