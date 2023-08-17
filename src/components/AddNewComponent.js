import { useEffect, useState } from "react";
import Axios from "axios";

export default function AddNewComponent() {

    var [employees, setEmployees] = useState([]);
    var [newEmployee, setNewEmployee] = useState({ name: "", age: ""});
    
    useEffect(function () {
        Axios.get("http://localhost:4000/employees").then(
            function (response) {
                setEmployees(response.data);
            },
            function (err) {
                debugger;
            }
        )
    }, [])
    
    function addEmployee() {
        debugger;
        Axios.post("http://localhost:4000/addEmployees/" + newEmployee.name + "?data=somedata&age=30", newEmployee).then(function (response) {
            debugger;
            setEmployees(response.data)
        }, (err) => {
            alert("Cannot Add Duplicate Employee")
        })
    }
    
    function deleteEmployee(event) {
        Axios.delete("http://localhost:4000/deleteEmployees/" + event.target.id).then(function (response) {
            setEmployees(response.data)
        })
    }
    
    function updateData(event) {
        Axios.put("http://localhost:4000/updateEmployee/" + event.target.id, { age: 155, address: "Rohini" }).then((response) => {
            debugger;
            setEmployees(response.data)
        })
    }
    
    function updateNewUser(event) {
        setNewEmployee({
            ...newEmployee,
            [event.target.id]: event.target.value
        })
    }
    return (
        <div>
            <div><br/>
                Enter Name <input type="text" id="name" value={newEmployee.name} onChange={updateNewUser} /><br/><br/>
                Enter Age <input type="text" id="age" value={newEmployee.age} onChange={updateNewUser} /><br /><br />
                <input type="button" value="Add Employee" onClick={ addEmployee } />
            </div>
            
            <div>
                {employees.map(function(emp) {
                    return (
                         <div className="card" style={{ width: "18rem", display: "inline-block", margin: "10px" }}>
                            <img src="https://img.freepik.com/free-photo/happy-co-workers-close-window_1098-3172.jpg" className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Name: {emp.name}, Age: {emp.age}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <input type="button" id={emp.name} onClick={deleteEmployee} value="Delete" />
                                <input type="button" id={emp.name} onClick={updateData} value="Update" />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}