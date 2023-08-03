import ReactDOM from "react-dom";
import React from "react";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import EmployeeComponent from "./components/EmployeeComponent";
var employeeArray = [{
    name: "Mayank",
    age: 50
}, {
    name: "Mayank Gupta",
    age: 50
}]
var salaryArray = [10, 20, 30];
var employeeOne = {
    userName: "TechnoFunnel",
    age: 20
}

var employeeTwo = {
    userName: "Varun Khera",
    age: 1000
}

ReactDOM.render((
    <div>
        <EmployeeComponent employee={employeeOne}></EmployeeComponent>
    </div>
), document.getElementById("root"))
