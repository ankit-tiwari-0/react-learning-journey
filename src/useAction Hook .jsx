import { useActionState } from "react"

function UseAction(){
    const Handlesubmit = async(previousData,formData)=>{
        let name=formData.get('name')
        let password=formData.get('password')
        await new Promise(res=>setTimeout(res,1000))
        // console.log("Handlesubmit called",name,password);
        if (name && password){
            return{message:'Data Submitted',name,password}
        }else{
            return{error:'Failed to Submit. Enter proper data',name,password}
        }
        
    }
    const [data,action,pending]=useActionState(Handlesubmit,undefined)
    console.log(data);
    
    return(
        <div>
            <h1>useAction Hook in React js</h1>
            <form action={action}>
                <input type="text" placeholder="Enter name " name="name" />
                <br /><br />
                <input type="text" placeholder="Enter password " name="password" />
                <br /><br />
                 <button disabled={pending}>Submit Data</button>
            </form>
            {
                data?.error && <span style={{color:'red'}}>{data?.error}</span>
            }
            {
                data?.message && <span style={{color:'green'}}>{data?.message}</span>
            }
            <h3>Name : {data?.name}</h3>
            <h3>PASSword : {data?.password}</h3>
        </div>
    )
}
export default UseAction