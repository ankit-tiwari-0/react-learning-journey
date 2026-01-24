import { useTransition } from "react"

function Transition(){
    const [pending,startTransition]=useTransition();

    const handleButton=()=>{
        startTransition(async()=>{
            await new Promise(res=>setTimeout(res,2000))
        })
    }
        return(
        <div>
        <h1>useTransition Hook in React js 19</h1>
         {
            pending?
            <img src="https://media.tenor.com/On7kvXhzml4AAAAC/loading-gif.gif" alt="" srcset="" />
            :null
         }
        <button disabled={pending} onClick={handleButton}>Click</button>
        </div>
    )
}
export default Transition