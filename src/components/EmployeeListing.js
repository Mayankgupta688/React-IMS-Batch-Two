export default function EmployeeListing(props) {
    debugger;
    var employeeList = [
        { name: "Varun Khera", age: 15 },
        { name: "Meha", age: 30 },
        { name: "Mayank", age: 32 }
    ]
    
    function deleteEmployee(event) {
        debugger;
        alert("Button Clicked: " + event.target.id);
        employeeList = employeeList.filter(function (employee) {
            if (employee.name != event.target.id) {
                return true;
            } else {
                return false;
            }
        })
    }

    function deleteEmployeeWithoutEvent(employee) {
        debugger;
        alert("Button Clicked: " + employee.name)
    }
    
    return (
        <>
            
            Enter Name: <input type="text" placeholder="Enter Name" /><br/><br/>
            Enter Age <input type="text" placeholder="Enter Age" /><br/><br/>
            
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