import { useState } from "react"
import About from "./UserAbout"
import Display from "./UserDisplay"

function  Liftingstate(){
    const [user, Setuser]=useState()
    return(
        <div>
           <About newUser={Setuser}/>
           <Display Istamal={user} />
        </div>
    )
}
export default Liftingstate