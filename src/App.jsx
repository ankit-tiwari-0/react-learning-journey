function App(){
  function callFun(){
    alert("function called")
  }

  const fruit=(name)=>{
    alert(name)
  }

  return(
    <div>
      <h1>Event and function call</h1>
      <button onClick={callFun}>nn</button>
      <button onClick={()=>fruit("apple")}>Appleeee</button>
      <button onClick={()=>fruit("apple")}>Banana</button>
    </div>
  )
} 

// onclick call itself it want defination of function okk 

export default App