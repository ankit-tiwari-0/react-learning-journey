 import { NavLink , Outlet } from "react-router"
 function College(){
    return(
        <div className="College" style={{textAlign:'center'}}>
            <h1>collage page</h1>
            <NavLink className="ink" to="student">Student</NavLink>
            <NavLink className="ink" to="DEpartment">DEpartment</NavLink>
            <NavLink className="ink" to="Detail">Collage Details</NavLink>
             <Outlet />
        </div>
    )
}
export default College