import { Routes, Route } from "react-router";
import Nav from "./Nav";
import Home from "./hom";
import About from "./abou";
import LOgg from "./log";
import Pagenotfound from "./PageNotfound";
import College from "./college";
import Student from "./tudent";
import Depert from "./Departement";
import Detail from "./Detail";
import UserList from "./UserLIst";
import Userdetail from "./UserDetail";

function App(){

    return(
        <>
        {/* <Nav/> */}
        
         <Routes>  
        <Route element={<Nav/>}>
         <Route path="/" element={<Home/>} />
         <Route path="/users" element={<UserList/>}/>
         <Route path="/User/:id" element={<Userdetail/>}/>
         
       

        
            <Route path="User">
            <Route path="/User/about" element={<About/>} />
             <Route path="/User/login" element={<LOgg/>} />
            </Route>

            <Route path="/college" element={<College/>}>
              <Route path="student" element={<Student/>}/>
              <Route path="Detail" element={<Detail/>}/>
              <Route path="DEpartment" element={<Depert/>}/>
            </Route>
             </Route>

            <Route path="*" element={<Pagenotfound/>} />
        </Routes>
        </>
    )
}
export default App