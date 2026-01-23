import { useRef } from "react"
import UserINp from "./userInput";

function App(){
    const inputRef=useRef(null)

    const UPdateInpute=()=>{
        inputRef.current.value=(100);
        inputRef.current.focus();
        inputRef.current.style.color="green"
    }
    
    return(
        <>
        <h1>Forward Ref</h1>
       <UserINp hh={inputRef}/>
        <button onClick={UPdateInpute}>Update Inpute field</button>
        </>
    )
}

export default App