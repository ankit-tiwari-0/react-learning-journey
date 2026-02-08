import { Link } from "react-router"

export default function UserList(){
    const Userdata=[
        {id:1,Name:'Anil'},
        {id:2,Name:'Ankit'},
        {id:3,Name:'Aniket'},
        {id:4,Name:'Ankite'},
        {id:5,Name:'Anu'},
        {id:6,Name:'Amir'},
        {id:7,Name:'Noorin'},
        {id:8,Name:'Pinky'},

    ]
    
    return(
        <div style={{marginLeft:'40px'}}>
         <h1>User List Page</h1>
         {
            Userdata.map((item)=>(
                <div>
                    <h3><Link to={"/User/:id"+item.id}>{item.Name}</Link></h3>
                </div>
            ))
         }
        </div>
    )
}