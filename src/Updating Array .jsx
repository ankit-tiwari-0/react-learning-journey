import { useState } from "react"

export default function Array(){
    const [data,setdata]=useState([
        'anil','sam','peter'
    ])

    const [dataDetails,setdetails]=useState([
        {name:'anil',age:'25'},
        {name:'patel',age:'20'},
        {name:'rinku',age:'29'}
    ])

    const handelUser=(name)=>{
        data[data.length-1]=name;
        setdata([...data])
    }

    const handelage=(age)=>{
     dataDetails[dataDetails.length-1].age=age;
     setdetails([...dataDetails])
    }
    return(
        <div>
         <h1>Updating Array in state</h1>
         <input type="text" placeholder="Enter last Uszer name" 
         onChange={(e)=>handelUser(e.target.value)}/>
         {
            data.map((item,index)=>(
                <h3 key={index} >{item}</h3>
            ))
         }
         <hr />
         <input type="text" placeholder="Enter last Uszer age" 
         onChange={(e)=>handelage(e.target.value)}/>
         {
            dataDetails.map((item,index)=>(
                <h2 key={index}>{item.name} : {item.age}</h2>
            ))
         }
        </div>
    )
}