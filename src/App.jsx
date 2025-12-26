function App(){
  const name= "";
  const userobj={
    namee:"ANKIT",
    email:"ankit.tiwari.47@gmail.com"
  }
  const userarray =["Jabyokay", "metera","Noorin"]
  let x=10 +10;
  let y=20 -1;
  let Path="https://images.unsplash.com/photo-1765232399256-4a52cb9f0bca?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  function language(){
    return "React js"
  }
  
  function Multipal(a,b){
    return a*b
  }
  function calculate(a, b, op) {
  if (op == "+") {
    return a + b;
  } else if (op == "-") {
    return a - b;
  } else if (op == "*") {
    return a * b;
  } else {
    return "chal nikal"; // default case
  }
}

  return(
    <div>
    <h1>JSX with curly Braces</h1>
    <h1> {name?name:"user not found"} </h1>
    <h1> {x*y} </h1>
    <h1>{language()}</h1>
    <h1> {Multipal(5,5)} </h1>
    <h1> {calculate(5,10 ,"-")} </h1>
    <h1>{userobj.email}</h1>
    <h1>{userarray[0]}</h1>
    <img src={Path}  />
    </div>
  )
}

export default App