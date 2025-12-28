import { useState } from "react"
const Counter=()=>{
    const [count, setcount]= useState(0)
    const [rcount, setrcount]=useState(100)
    return(
        <div>
            <h1>Counter:{count}</h1>
            <h2>REVERCE counter:{rcount}</h2>
            <button onClick={()=>setcount(count+1)}>UPDATE Counter</button>
            <button onClick={()=>setrcount(rcount -1)}>UPDATE Counter</button>
        </div>
    )
}

export default Counter