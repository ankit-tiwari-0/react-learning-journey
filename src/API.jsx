import { useState } from "react"
import College from "./college"
import { SubjectContext } from "./ContextApi"

function API(){
    const [subject , setsub]=useState("")
    return(
        <div style={{backgroundColor:"yellow",padding:10}}>
            <SubjectContext.Provider value={subject}>
                <select Value={subject} onChange={(e)=>setsub(e.target.value)}>
                    <option value="">Select sub</option>
                    <option value="Maths">Maths</option>
                    <option value="History">History</option>
                    <option value="English">English</option>
                </select>
             <h1>context api</h1>
             <button onClick={()=>setsub('')}>Clear</button>
              <College/>
            </SubjectContext.Provider>
         
        </div>
    )
}

export default API