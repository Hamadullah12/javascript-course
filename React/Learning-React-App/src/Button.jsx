function PrintHi() {
    console.log("Hellow world of coding");
}
function ParaHello() {
    console.log("Hi i am paragraph over on mouse event")
}

function DblClick() {
    console.log("Double clicked ")
}
export default function Button() {
    return (
        <div>
            <button onClick={PrintHi}>Click Me!</button>
            <p onMouseOver={ParaHello}>Hellow I am the one and only paragarph in this page</p>
            <button onDoubleClick={DblClick}>Click Me double!</button>
        </div>
    )
}