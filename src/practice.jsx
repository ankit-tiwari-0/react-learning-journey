function Practice(){
    const userData = [
        {
            Name:'vivek',
            Age:'25',
            Height:'6.2',
            Gmail:'vivek@gmail.com',
            ID:'1',
            Gender:'Male'
        },
         {
            Name:'sahil',
            Age:'28',
            Height:'6.0',
            Gmail:'sahil@gmail.com',
            ID:'2',
            Gender:'Male'
        },
         {
            Name:'neha',
            Age:'22',
            Height:'5.2',
            Gmail:'neha@gmail.com',
            ID:'3',
            Gender:'Female'
        },
         {
            Name:'Noorin',
            Age:'20',
            Height:'5.5',
            Gmail:'noorin@gmail.com',
            ID:'4',
            Gender:'feMale'
        },
         {
            Name:'Afreeen',
            Age:'25',
            Height:'5.2',
            Gmail:'Afreen@gmail.com',
            ID:'5',
            Gender:'feMale'
        },
         {
            Name:'pooja',
            Age:'25',
            Height:'6.2',
            Gmail:'pooja@gmail.com',
            ID:'6',
            Gender:'female'
        },
         {
            Name:'kartina',
            Age:'55',
            Height:'6.2',
            Gmail:'katrina@gmail.com',
            ID:'7',
            Gender:'feMale'
        },
         {
            Name:'tooba',
            Age:'15',
            Height:'6.2',
            Gmail:'tooba@gmail.com',
            ID:'8',
            Gender:'feMale'
        },
         {
            Name:'Ali',
            Age:'25',
            Height:'5.2',
            Gmail:'ali@gmail.com',
            ID:'9',
            Gender:'feMale'
        },
         {
            Name:'Alok',
            Age:'25',
            Height:'6.2',
            Gmail:'alok@gmail.com',
            ID:'10',
            Gender:'Male'
        },
         {
            Name:'Arshi',
            Age:'25',
            Height:'5.2',
            Gmail:'mine@gmail.com',
            ID:'11',
            Gender:'feMale'
        },
        
    ]
    return(
        <div>
            <h1> Loop in jsx Map function</h1>
            <table border={"10"}>
                <thead>
                 <tr style={{color:"white", fontSize:"50px", fontStyle:"bold", margin:"10px" }}>
                    <td>ID</td>
                    <td>NAME</td>
                    <td>AGE</td>
                    <td>Height</td>
                    <td>Gender</td>
                 </tr>
                  </thead>
                 <tbody>
                    {
                    userData.map((use)=>(                 
                        
                    <tr style={{color:"pink", fontSize:"50px"}}>
                      <td>{use.ID}</td>   
                      <td>{use.Name}</td>   
                      <td>{use.Age}</td>   
                      <td>{use.Height}</td>   
                      <td>{use.Gender}</td>   

                     </tr>   
                    ))
                    }
                 </tbody>
               
            </table>

        </div>
    )
}

export default Practice;