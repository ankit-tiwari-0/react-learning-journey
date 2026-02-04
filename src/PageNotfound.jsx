import { Link } from "react-router"
export default function Pagenotfound(){
    return(
        < >
            <div style={{textAlign:"center", fontSize:"20px", margin:"35px"}}>
            <Link to="/" >Go to Home Page</Link>
            </div>
            <img style={{width:"100%"}}  src="https://tse3.mm.bing.net/th/id/OIP.Nuptq47KT90cx1cWGjRqRgHaHa?w=612&h=612&rs=1&pid=ImgDetMain&o=7&rm=3" alt="404" />
        </>
    )
}