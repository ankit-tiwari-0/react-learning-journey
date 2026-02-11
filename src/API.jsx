import { useEffect, useState } from "react"
 import './index.css'
const App = () => {
const [  UseData, setuser] = useState([])
useEffect(()=>{
  Getuserdata();
},[])

  async function Getuserdata() {
    const url ="https://dummyjson.com/users"
    let response = await fetch(url)
    response = await response.json()
    console.log(response);
    setuser(response.users)
    
  }
  return (
    <div >
      <h1>Fetch data from API</h1>
       <ul className="ul hh">
            <li > Name </li>
            <li > Last </li>
            <li >maid </li>
            <li > Age </li>

          </ul>
      {
        UseData &&   UseData.map((user)=>{
          return(
             <ul key={user.id} className="ul">
            <li > {user.firstName} </li>
            <li > {user.lastName} </li>
            <li > {user.maidenName} </li>
            <li > {user.age} </li>

          </ul>
          )
         
        })
      }

    </div>
    
  )
}

export default App

