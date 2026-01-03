import { useState } from "react"

function App(){
  const [name,setname]=useState('');
  const [password,setpass]=useState('');
  const [gmail,setgmail]=useState('');
    return(
        <div>
            <h1>ConTroller component</h1>
            <form action="" method="get">
                <input type="text" onChange={(e)=>setname(e.target.value)} placeholder="enter name" />
                <br />
                <input type="text" onChange={(e)=>setpass(e.target.value)} placeholder="Password" />
                <br />
                <input type="text" onChange={(e)=>setgmail(e.target.value)} placeholder="Gmail" />
                <br />
                <button>submit</button>
                <button onClick={()=>{setgmail('');setname();setpass()}}>clear</button>
                <h4>{name}</h4>
                <h4>{password}</h4>
                <h4>{gmail}</h4>
            </form>
        </div>
    )
}

export default App;