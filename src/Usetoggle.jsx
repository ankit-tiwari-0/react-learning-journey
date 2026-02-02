import { useState } from "react"

function USetoggle(defaultVal){
    const [value,setvalue]=useState(defaultVal);

    function toggle(val){
        if(typeof val!='boolean'){
            setvalue(!value)
            console.log("if");
            
        }else{
            setvalue(val)
            console.log("else");
        }
    } 
    return[value,toggle]
}

export default USetoggle