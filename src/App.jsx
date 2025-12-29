import { useState } from "react";
function App(){
  const [display, setdisplay]=useState(true)
  return(
    <>
    <h1>Toggle in React js</h1>
    <button onClick={()=>setdisplay(!display)}>Toggle</button>

    {
      display? <h1>Ankitaaaaaaaaaa</h1>
      :null
    }
    </>
    
  )
}

export default App