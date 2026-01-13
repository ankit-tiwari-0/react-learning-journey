import { useEffect, useState } from "react";

function App() {

 const [call, setcall]= useState(0); 
 const [data, setdata]= useState(0); 

  
   useEffect(()=>{
    //  callonce();
    counterFunction();
   },[data,call])
  
   
   function counterFunction(){
    console.log(data);
    
   }

  function callonce() {
    console.log("Callone function called");

  }
 
  return (
    <div>
      <h1>useEffect Hook</h1>
     <button onClick={(()=> setcall(call+1))}>counter{call}</button>
     <button onClick={(()=> setdata(data+1))}>datar{data}</button>
    </div>
  )
}

export default App;