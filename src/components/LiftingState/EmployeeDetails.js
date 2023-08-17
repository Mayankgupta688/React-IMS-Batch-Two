export default function EmployeeDetails(props) {
    debugger;
    return (
        <div>
            <h1>User Name: {props.employee.name}</h1>
            <h1>User Age: {props.employee.age}</h1>
            <input type="button" value="Delete" onClick={function () {
                debugger;
                props.deleteEmployee(props.employee.name)
            }} /><br /><hr />
        </div>
    )
}