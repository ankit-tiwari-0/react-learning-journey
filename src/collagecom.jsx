import Student from "./student";

function Colll({call}){
    return(
        <div style={{
            background:"#635d5dff",
            padding:"20px",
            margin:"50px", 
            width:"500px",
            borderRadius:"25px",
            borderBottom:"5px solid red"
        }}>
            
                <h1>Name: {call.name}</h1>
                <ul>
                    <li>
                        City: {call.city}
                        
                    </li>
                    <li>
                        Website: {call.Website}
                    </li>
                    <li>
                      <Student collage={call.student} />
                        
                    </li>
                </ul>
            

        </div>
    )
}
export default Colll;