import ReactDOM from "react-dom";
import React from "react";
import EmployeeListing from "./components/EmployeeListing";

var employeeArray = [{
    name: "Mayank",
    age: 50
}, {
    name: "Mayank Gupta",
    age: 50
    }];

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
    <>
        <EmployeeListing employees={employeeArray}></EmployeeListing>
    </>
), document.getElementById("root"))
