import { useState } from "react";
import Counter from "./coun";

function App(){
   const [count, setcount]=useState(0);
   const [data, setdata]=useState(0);
   const [display, setdis]=useState(true);

    return(
        <div>
        <h1>Handle Props side Effect with useEffect in component</h1>
       {
         display? <Counter hehe={count} ff={data} ></Counter>:null
       }
        <button onClick={()=>setcount(count+1)}>counter</button>
        <button onClick={()=>setdata(data+1)}>data</button>
        <button onClick={()=>setdis(!display)}>Togg</button>
        </div>
    )
}

export default App;