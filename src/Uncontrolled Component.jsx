import { useRef } from "react";

function Uncontroll(){
    
  const Useref = useRef(null);
  const passef = useRef(null);

    const handleForm=(event)=>{
        event.preventDefault();
        const user= document.querySelector("#user").value;
        const password= document.querySelector("#password").value;

        console.log(user,password);
        
    }

    const handleFormRef=(event)=>{
        event.preventDefault();
        const User = Useref.current.value
        const pass = passef.current.value
        console.log("hann",User,"pass",pass);
        
    }

    return(
        <>
        <h1> Uncontrolled Component</h1>
        <form action="" method="post" onSubmit={handleForm} >
            <input type="text" id="user" placeholder="Enter your name"/>
            <br />
            <input type="password" id="password" placeholder="Enter user password" />
            <br />
            <button>
                Submit
            </button>

        </form>

        <h1> Uncontrolled Component useRef</h1>
        <form action="" method="post" onSubmit={handleFormRef} >
            <input type="text" ref={Useref} id="user" placeholder="Enter your name"/>
            <br />
            <input type="password" ref={passef} id="password" placeholder="Enter user password" />
            <br />
            <button>
                Submit
            </button>

        </form>
        </>
    )
}

export default Uncontroll