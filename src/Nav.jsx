import { Link ,Outlet } from "react-router";
import './header.css'
export default function Nav(){
    return(
     <div>
       <div className="header">
        <div>
          <Link className="link" to={"/"}>
           <img className="img" width={"20px"} src="https://www.clipartmax.com/png/middle/58-583780_big-image-cool-logos-with-no-background.png" alt="" />
          </Link>
        </div>
        <div>
             <ul className="hh">
                <li>
                  <Link className="link" to="/">Home</Link>  
                </li>
                <li>
                  <Link className="link" to="/about">About</Link>  
                </li>
                <li>
                  <Link className="link" to={"/login"}>Login</Link>  
                </li>
                <li>
                  <Link className="link" to={"/college"}>College</Link>  
                </li>
             </ul>
        </div>
      </div>
        <Outlet/>
     </div>
    )
}