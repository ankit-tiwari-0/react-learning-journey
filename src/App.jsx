import { useState } from "react";
import Counter from "./counter";
function App(){
const [fruit, kuchhbhii]=useState("Apple");
  const handleFruite=()=>{
    kuchhbhii("Banana")
  }
  return(
    <div>
      <h1>State in React Js</h1>
      <h1>{fruit}</h1>
      <button onClick={handleFruite}>Chage the name </button>
      <Counter />
    </div>
  )
}

export default App