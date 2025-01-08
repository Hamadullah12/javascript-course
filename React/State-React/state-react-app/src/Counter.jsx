import { useState } from "react";

export default function Counter() {
    let [Count, setCount] = useState(0);//initialze value 
    console.log('Compnent re render ')
    console.log(`Count = ${Count}`)
    let incCount=() => {
        setCount(Count + 1)
        console.log(`Increace count is = ${Count}`)
    }
        return (
            <div>
                <h2>Count = {Count} </h2>
                <button onClick={incCount}>Increase Count</button>
            </div>
        )

    
}