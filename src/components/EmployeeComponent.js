export default function EmployeeComponent(props) {
    
    function returnDetails() {
        debugger;
        return `My User Name is ${props.employee.userName}`
    }
    
    debugger;
    return (
        <div>
            <h1>{returnDetails()}</h1>
            
            
            {(props.employee.age < 40 || props.employee.age > 10) && (
                <div>
                    <h2>This is a Startup</h2>
                    <h3>Welcome to TechnoFunnel</h3>
                </div>
            )}
            
            
            {props.employee.age >= 40 && <h2>This is Old Company</h2>}
        </div>
    )
}