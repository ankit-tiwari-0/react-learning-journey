import { Route } from "react-router";
import { Routes } from "react-router";
import Nav from "./Nav";
import Home from "./hom";
import About from "./abou";
import LOgg from "./log";

function App(){

    return(
        <>
        <Nav/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/login" element={<LOgg/>} />
        </Routes>
        </>
    )
}
export default App