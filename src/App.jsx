import { useState } from "react";

function App(){
const[val, setval]=useState("")    
    return(

        <div>
            <h1>Get input field Value</h1>
            <input type="text"value={val} onChange={(event)=>setval(event.target.value)} placeholder="" />
            <h1>{val}</h1>
            <button onClick={()=>setval("")}>clear</button>
        </div>
    )
}
export default App;