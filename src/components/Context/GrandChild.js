import { useContext } from "react"
import contextObj from "./ContextObject";

export default function GrandChild() {
    debugger;
    var dataFromParent = useContext(contextObj)
    return (
        <div>
            <h2>This is Grand Child Component {dataFromParent.userInfo?.name}</h2>
            <h3>Company: {dataFromParent.companyName}</h3>
            <input type="button" value="Change Name" onClick={function () {
                debugger;
                dataFromParent.updateName("Anshul");
            }} />
        </div>
    )
}