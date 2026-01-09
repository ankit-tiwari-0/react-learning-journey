import { useEffect, useState } from "react";

function Clock({color}){
    const [time, setTime] = useState(0);
    useEffect(()=> {
        setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
        }, 1000);
    }, [])
    return(
        <div>
           <h1 style={{color:color,background:"white", width:"300px", padding:"10px",borderRadius:"10px"  }}>{time}</h1>
        </div>
    )
}  

export default Clock;