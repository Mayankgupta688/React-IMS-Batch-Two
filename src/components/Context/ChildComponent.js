import GrandChild from "./GrandChild"

export default function ChildComponent() {
    return (
        <div>
            <h2>This is Child Component</h2><hr/>
            <GrandChild></GrandChild>
        </div>
    )
}