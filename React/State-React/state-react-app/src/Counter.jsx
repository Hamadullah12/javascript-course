import { useState } from "react";

export default function Counter() {
    let [Count, setCount] = useState(0);//initialze value 
    
    let incCount=() => {
        setCount((prevCount) => {
            return prevCount + 1;
       })
        setCount((prevCount) => {
            return prevCount + 1;
       })
    }
        return (
            <div>
                <h2>Count = {Count} </h2>
                <button onClick={incCount}>Increase Count</button>
            </div>
        )

    
}