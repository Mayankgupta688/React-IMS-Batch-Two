import { useState } from "react";

export default function EmployeeHooks() {
    var [employeeName, setEmployeeName] = useState(0);
    
    function increaseCount() {
        debugger;
        // setEmployeeName(employeeName + 1);
        
        setEmployeeName(function(employeeName) {
            return employeeName + 1;
        })
    }
    return (
        <div>
            <h1>Actual Value is: {employeeName}</h1>
            <input type="button" value="Increment" onClick={ increaseCount } />
        </div>
    )
}