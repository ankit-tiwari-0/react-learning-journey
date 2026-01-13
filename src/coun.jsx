import { useEffect } from "react";

function Counter({hehe,ff}){

    const HandleCounter=()=>{
        console.log("handleCOunter called");
    }

    const datacount=()=>{
        console.log("data")
    }
     
    useEffect(()=>{
     HandleCounter();
     
    },[])

    useEffect(()=>{
        datacount();
    },[ff])

    
    return(
        <div>
            <h1>Counter component{hehe}</h1>
            <h1>Counter component{ff}</h1>
        </div>
    )
}

export default Counter