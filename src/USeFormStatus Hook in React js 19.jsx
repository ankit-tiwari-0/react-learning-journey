import { useFormStatus } from "react-dom";

function App(){

    const handleSubmit=async()=>{
        await new Promise(rest=>setTimeout(rest,200));
        console.log("submit");
        
    }
    function CustomerForm(){
        const {pending} =useFormStatus();
        console.log(pending);
        return(
            <div>
                <input type="text" placeholder="enter name" />
                <br />
                <br />
                <input type="text" placeholder="Enter Password" />
                <br />
                <br />
                <button>submit</button>
            </div>
        )
        
    }
    return(
    <div>
        <h1>USeFormStatus Hook in React js 19</h1>
        <form action={handleSubmit}>
         <CustomerForm />
        </form>
    </div>    
    );
}

export default App