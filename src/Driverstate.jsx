import { useState } from "react"

function Driver(){
    const [users,setusers]=useState([]);
    const[user,setuser]=useState("");
    const handleAddUsers=()=>{
        setusers([...users,user])
    }
   const total =users.length;
   const last=users[users.length-1];
    const uniqueUsers=[...new Set(users)].length;
    return(
        <div>
        <h2>Total User :{total}</h2>
        <h2>Last User :{last}</h2>
        <h2>Uniqe Total User :{uniqueUsers}</h2>
        <input type="text" onChange={(e)=>setuser(e.target.value) }  placeholder="Add new user" style={{height:"30px", width:"250px"}}/>
        <button onClick={handleAddUsers} style={{margin:"20px"}}>Add user</button>
        {
            users.map((item,index)=>(
                <h4 key={index}>{item}</h4>
            ))
        }
        </div>
    )
}

export default Driver