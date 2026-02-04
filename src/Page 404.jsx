import { Route } from "react-router";
import { Routes } from "react-router";
import Nav from "./Nav";
import Home from "./hom";
import About from "./abou";
import LOgg from "./log";
import Pagenotfound from "./PageNotfound";

function App(){

    return(
        <>
        <Nav/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/login" element={<LOgg/>} />
            <Route path="*" element={<Pagenotfound/>} />
        </Routes>
        </>
    )
}
export default App