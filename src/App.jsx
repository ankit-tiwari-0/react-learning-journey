function App(){
  const userName="Ankit tiwari";
  let x=30;
  let y=100;
  return(
    <>
    <h1> {userName} </h1>
    <h1>{10+90}</h1>
    <h1>{x*y}</h1>
    <button onClick={()=>alert("chal")}>clicknaa</button>
    </>
  )
}

export default App