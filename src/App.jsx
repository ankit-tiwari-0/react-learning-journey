function App(){

  // alert(sum())
  return(
    <div>
    <h1>First component of react {sum()}</h1>
      <Fruit />

    </div>
  )
}

function Fruit(){
  return(
    <h1>Apple </h1>
  )
}

function sum(){
  return 10+10
}

export default App;