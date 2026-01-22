import User from "./h";

function Pass(){

     const display = (name)=>{
        alert(name)
    }
    const getm =()=>{
        alert("get function called")
    }

    return(
        <>
        <h1>Call parent component Function from child component</h1>
        <User helo={display} name="hh" other={getm}/>
        <User helo={display} name="jj" other={getm}/>
        </>
    )
} 

export default Pass