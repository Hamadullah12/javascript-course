import { useEffect, useState } from "react"

export default function Search() {
    // syntax for useEffect()
    useEffect(() => {
        function test() {
            console.log("Test has been executed")
        }
        test(),[query]
    })
    const [query, setQuery]=useState("pizza...")
    return <div>
        <input value={query} onChange={(e)=>setQuery(e.target.value)} type="text" />
    </div>
}