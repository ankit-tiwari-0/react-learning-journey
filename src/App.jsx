import Colll from "./collagecom"

function App(){
    const collageData = [
        {
            name:"IET Alwar",
            city: "Alwar",
            Website:"www.iet.com",
            student:[
            {
          Name:'Ankite ',
          Age:'21',
          Email:'@ankit.com ' 
        },
        {
          Name:'neha ',
          Age:'12',
          Email:'@neha.cpm ' 
        },
        {
          Name:'priyanka ',
          Age:'255',
          Email:'@priyanka.com ' 
        },
        {
          Name:' Dholu',
          Age:'85',
          Email:'@Dholu.com ' 
        },
            ]
        },
        {
            name:"IIT Delhi",
            city: "Alwar",
            Website:"www.iet.com",
            student:[
            {
          Name:'Ankite ',
          Age:'21',
          Email:'@ankit.com ' 
        },
        {
          Name:'neha ',
          Age:'12',
          Email:'@neha.cpm ' 
        },
        {
          Name:'priyanka ',
          Age:'255',
          Email:'@priyanka.com ' 
        },
        {
          Name:' Dholu',
          Age:'85',
          Email:'@Dholu.com ' 
        },
            ]
        },
        {
            name:"SHAYAM LAL",
            city: "Alwar",
            Website:"www.iet.com",
            student:[
            {
          Name:'Ankite ',
          Age:'21',
          Email:'@ankit.com ' 
        },
        {
          Name:'neha ',
          Age:'12',
          Email:'@neha.cpm ' 
        },
        {
          Name:'priyanka ',
          Age:'255',
          Email:'@priyanka.com ' 
        },
        {
          Name:' Dholu',
          Age:'85',
          Email:'@Dholu.com ' 
        },
            ]
        },
        
    ]
    return(
      <div>
        <h1>Nested Looping with component</h1>
        
             {
            collageData.map((coll, index)=>(
            <div key={index}>
                <Colll call={coll}/>
                </div>
            ))
             }
        

        
      
      </div>
    )
}
export default App