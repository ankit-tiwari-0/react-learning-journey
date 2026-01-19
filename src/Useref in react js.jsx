import { useRef } from "react"
function Useref(){
    const inputewaRef = useRef(null);
    const inputHandle=()=>{
        inputewaRef.current.focus()
        inputewaRef.current.style.color='green'
    }
    const togglehandle=()=>{
        if(inputewaRef.current.style.display!='none'){
            inputewaRef.current.style.display='none'
        }else{
             inputewaRef.current.style.display='inline'
        }
    }

    return(
        <>
        <h1> Useref in react js</h1>
        <button onClick={togglehandle}>Toogle</button>
        <input ref={inputewaRef} type="text" placeholder="Enter u name" style={{margin:"25px",width:"200px" , height:"30px"}}  />
        <button onClick={inputHandle}>Focus on Input field</button>
        </>
    )
}

export default Useref