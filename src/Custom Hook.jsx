import USetoggle from "./Usetoggle"

function CustomHook(){
    const [value, togggle]=USetoggle(true);
    console.log("val---",value);
    return(
        <div>
          <button onClick={togggle}>TOggle Heading</button>   
          <button onClick={()=>togggle(false)}>Hide Heading</button>   
          <button onClick={()=>togggle(true)}>Show Heading</button>
            {
                value?<h1>Custom Hook in React js</h1>  :null
            }
        </div>
    )
}

export default CustomHook