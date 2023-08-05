import { useState } from "react";
export default function EmployeeListing(props) {
    var [newEmployee, setNewEmployee] = useState({
        name: "TechnoFunnel",
        age: 3
    })
    
    function updateData(event) {
        debugger;
        if (event.target.id == "name") {
            setNewEmployee({
                ...newEmployee,
                name: event.target.value
            })
        } else if(event.target.id == "age") {
            setNewEmployee({
                ...newEmployee,
                age: event.target.value
            })
        }
        
    }
    
    function addEmployee() {
        setEmployeeList([
            ...employeeList,
            newEmployee
        ])
    }
    
    var [employeeList, setEmployeeList] = useState([
        { name: "Varun Khera", age: 15 },
        { name: "Meha", age: 30 },
        { name: "Mayank", age: 32 }
    ])
        
    function deleteEmployee(event) {
        var newEmployeeList = employeeList.filter(function (employee) {
            if (employee.name != event.target.id) {
                return true;
            } else {
                return false;
            }
        });
        setEmployeeList(newEmployeeList);
    }
    
    return (
        <>
            
            Enter Name: <input id="name" type="text" placeholder="Enter Name" value={newEmployee.name} onChange={updateData} /><br/><br/>
            Enter Age <input id="age" type="text" placeholder="Enter Age" value={newEmployee.age} onChange={updateData} /><br /><br />
            <input type="button" value="Add" onClick={addEmployee} />
            <h3>Length: {employeeList.length} {newEmployee.name}</h3>
            
            {employeeList.map(function (employee) {
                return (
                    <div style={{display: "inline"}}>
                        {(employee.age >= 10 && employee.age <= 55) && (
                            <div className="card" style={{ width: "18rem", display: "inline-block", margin: "10px" }}>
                                 <img src="https://img.freepik.com/free-photo/happy-co-workers-close-window_1098-3172.jpg" class="card-img-top" alt="..." />
                                <div className="card-body">
                                        <h5 className="card-title">{employee.name}</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <input type="button" id={employee.name} className="btn btn-primary" value="Delete" onClick={deleteEmployee} />
                                </div>
                            </div>
                        )}
                    </div>
                )
            })}
        </>
    )
}