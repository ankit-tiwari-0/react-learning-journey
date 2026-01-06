import { useState } from "react";

function Checkbox(){
    const [skill, setskiill]=useState([]);
    const handleskill=(e)=>{
        console.log(e.target.value, e.target.checked);
        if(e.target.checked){
            setskiill([...skill,e.target.value])
        }else{
            setskiill([...skill.filter((item)=>item!=e.target.value)])
        }
    }
    return(
        <div>
            <h2>Check the skill u have</h2>
           
            <label htmlFor="php" style={{display:"block"}}>
              <input onChange={handleskill} type="checkbox" id="php" value="php,"/> 
              PHP
            </label>

            
            <label htmlFor="js" style={{display:"block"}}>
            <input onChange={handleskill} type="checkbox" id="js" value="js,"/> 
                JS
            </label>

           
            <label htmlFor="Html" style={{display:"block"}}>
            <input onChange={handleskill} type="checkbox" id="Html" value="html,"/> 
                HTML
                </label>

            
            <label htmlFor="css" style={{display:"block"}}>
                <input onChange={handleskill} type="checkbox" id="css" value="css,"/> 
                CSS
                </label>
           
           <h2>{skill}</h2>
            
        </div>
        
    )
}
export default Checkbox;