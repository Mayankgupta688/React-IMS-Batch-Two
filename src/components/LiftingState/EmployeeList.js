import { useState } from "react";
import EmployeeDetails from "./EmployeeDetails";
export default function EmployeeList() {
    var [list, setList] = useState([
        { name: "Mayank", age: 10 },
        {name: "Varun", age: 15}
    ])
    function deleteEmployee(employeeName) {
        var newArray = list.filter(function (employee) {
            return employee.name != employeeName
        })
        
        setList(newArray)
    }
    
    return (
        <div>
            {list.map(function (employee) {
                return (
                    <EmployeeDetails deleteEmployee={deleteEmployee} employee={employee}></EmployeeDetails>
                )
            })}
        </div>
    )
}