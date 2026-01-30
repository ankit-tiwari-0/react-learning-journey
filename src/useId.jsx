import { useId } from "react"

export default function USEID(){
    return(
        <div>
           <h1>use of useId</h1> 
         <UseForm />
         <hr />
         <UseForm />
        </div>
    )
}

function UseForm(){
    const user =useId();
    // const password =useId();
    // const terms =useId();
    // const skiil =useId(); if u dont want to many every time id 
    return(
        <div>
        <form action="">
            <label htmlFor={user+"name"}>Enter User Name </label>
            <input id={user+"name"} type="text" placeholder="Enter name"/>
            <br /><br />
            <label htmlFor={user+"password"}>Enter User Password </label>
            <input id={user+"password"} type="text" placeholder="Enter password"/>
            <br /><br />
            <label htmlFor={user+"skill"}>Enter User skiil </label>
            <input id={user+"skill"} type="text" placeholder="Enter Skill"/>
            <br /><br />
            <input id={user+"term"} type="checkbox"  />
            <label htmlFor= {user+"term"}>Term and condition</label>
            <br /><br />
        </form>
        </div>
    )
}


