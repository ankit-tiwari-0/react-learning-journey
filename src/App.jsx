import User from "./user";
import Wrapper from "./wrapper";

function App(){
    return(
    <div>
     <h1>Props in reactjs</h1>
     {/* <User name={"ankitee"} />
     <User name={"ankit"} />
     <User  /> */}

     <Wrapper color="orange" > 
      <h1>heloo,everyone</h1>
     </Wrapper>

      <Wrapper> 
      <h1>I'm ankitee</h1>
     </Wrapper>

      <Wrapper> 
         <h1>heloo,naa</h1>
        <h2 style={{color:"pink"}}>please goo</h2>
        </Wrapper>

    </div>
    )
}

export default App;