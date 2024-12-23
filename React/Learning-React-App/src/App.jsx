import "./App.css";

import {Test1} from "./Test.jsx";
import {Multi} from "./Test.jsx";


function TestDes() {
    return <p>Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Eligendi voluptatibus adipisci, molestiae facere iusto
        numquam enim beatae nesciunt itaque. Soluta!</p>
}
function App() {
    return (
        <div>
            <Test1 />
            <Multi/>
            <Multi/>
            <TestDes/>
            <Test1/>
            <TestDes/>
        </div>
    ) 
}

export default App;