import { useState } from "react";

export default function Counter() {
    let [Count, setCount] = useState(0);
    let incCount=() => {
        setCount(Count + 1)
        console.log(Count)
    }
        return (
            <div>
                <h2>Count = {Count} </h2>
                <button onClick={incCount}>Increase Count</button>
            </div>
        )

    
}