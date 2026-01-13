import { useState } from "react";
import Counter from "./coun";

function App(){
   const [count, setcount]=useState(0)
   const [data, setdata]=useState(0)

    return(
        <div>
        <h1>Handle Props side Effect with useEffect in component</h1>
        <Counter hehe={count}
        ff={data} />
        <button onClick={()=>setcount(count+1)}>counter</button>
        <button onClick={()=>setdata(data+1)}>data</button>
        </div>
    )
}

export default App;