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
      <button onClick={()=>fruit("apple")}>Appleeee</button>
      <button onClick={()=>fruit("apple")}>Banana</button>
    </div>
  )
}

export default App