import { createContext, useState, useContext } from "react";
import ChildComponent from "./ChildComponent";
import contextObj from "./ContextObject";

export default function ComponentParent() {
    var [data, setData] = useState({
        name: "Mayank",
        age: 10
    })
    
    function updateName(newName) {
        debugger;
        setData({
            ...data,
            name: newName
        })
    }
    
    return (
        <div>
            <contextObj.Provider value={{userInfo: data, companyName: "technofunnel", updateName: updateName}}>
                <div>
                    <h1>This is Parent Component {data.name}</h1>
                    
                </div><hr/>
                <ChildComponent></ChildComponent>
            </contextObj.Provider>
        
            
        </div>
        
    )
}



