import { Link, useParams } from "react-router"

export default function Userdetail(){
    const paramdata=useParams();
    return(
        <div style={{marginLeft:'40px'}}>
          <h1>User Detail Page</h1>  
          <h2> User id is : {paramdata.id}</h2>
          <Link to={'/Users'}>Back</Link>
        </div>
    )
}