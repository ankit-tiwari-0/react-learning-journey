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

function App(){

    return(
        <>
        <Nav/>
        <div style={{ marginTop: "60px", padding: "20px" }}>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/login" element={<LOgg/>} />

            <Route path="/college" element={<College/>}>
              <Route path="student" element={<Student/>}/>
              <Route path="Detail" element={<Detail/>}/>
              <Route path="DEpartment" element={<Depert/>}/>
            </Route>

            <Route path="*" element={<Pagenotfound/>} />
        </Routes>

        </div>
        </>
    )
}
export default App