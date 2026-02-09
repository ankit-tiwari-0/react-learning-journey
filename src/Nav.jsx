import { NavLink ,Outlet } from "react-router";
import './header.css'
export default function Nav(){
    return(
     <div>
       <div className="header">
        <div>
          <NavLink className="NavLink" to={"/"}>
           <img className="img" width={"29px"} style={{margin:'5px 0px 0 15px'}} src="https://www.clipartmax.com/png/middle/58-583780_big-image-cool-logos-with-no-background.png" alt="" />
          </NavLink>
        </div>
        <div>
             <ul className="hh">
                <li>
                  <NavLink className="Link" to="/">Home</NavLink>  
                </li>
                <li>
                  <NavLink className="Link" to="/User/about">About</NavLink>  
                </li>
                <li>
                  <NavLink className="Link" to={"/User/login"}>Login</NavLink>  
                </li>
                <li>
                  <NavLink className="Link" to={"/college"}>College</NavLink>  
                </li>
                <li>
                  <NavLink className="Link" to={"/Users"}>Users</NavLink>  
                </li>
                <li>
                  <NavLink className="Link" to={"/Users/List"}>List</NavLink>  
                </li>
             </ul>
        </div>
      </div>
        <Outlet/>
     </div>
    )
}