import { useState } from "react"
import Collage from "./collage"
import Student from "./student"
import User from "./user"

function App(){
  // let username = "ankite"
  // let age = 21
  // let gmail = "@ankita.com"
 let obj= {
  Name : "ankit",
  age :"21",
  gmail : "@akite.gmail"

 }

 let obj2= {
  Name : "anki",
  age :"21",
  gmail : "@akite.gmail"

 }

 let array = ['ggsgsg', 'bssgsg', 'hhhhh']
 const [student, setstudent]=useState("")


  return(
    <div>
      <h1>Props in react</h1>
      {student && <Student Name= {"saMMMMMMMMMMMM"}/>}
      <button onClick={()=>setstudent("bholu")}>update name</button>
      <Collage araaa= {array[0]}/>
      <User user={obj} />
      <User user={obj2} />

      {/* <User name = {username} age={age} gmail={gmail} /> */}
    </div>
  )
}

export default App