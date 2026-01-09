import { useState } from "react";
import Clock from "./clock";

function App(){
    const  [color, setcolor] = useState("green") 
    return(
        <div>
            <h1>Digital Clock in Reactjs </h1>
            <select onChange={(e)=>setcolor(e.target.value)} >
                <option value={"red"}>Red</option>
                <option value={"pink"}>Pink</option>
                <option value={"orange"}>Orange</option>
                <option value={"green"}>Green</option>
                <option value={"blue"}>BLUE</option>
            </select>
            <Clock color={color} />

        </div>
    )
}
export default App;