export default function HeaderComponent(props) {
    
    debugger;
    var randomValue = Math.floor(Math.random() * 100)
    
    var totalSalary = props.salary.reduce(function (total = 0, salaryElement) {
        return total + salaryElement;
    })
    
    return (
        <div>
            <h1>{props.userName}: This is Header with age {props.userAge}</h1>
            <h2>{props.employee.userName}: This is Header with age {props.employee.age}</h2>
            <h3>Random Number is {randomValue}</h3>
            <h4>Total Salary is: {totalSalary}</h4><hr />
        </div>
    )
}