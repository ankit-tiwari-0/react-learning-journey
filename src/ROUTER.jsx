import { BrowserRouter,Routes, Route, Link } from "react-router"
export default function Routing(){
    return(
     <div>
      <BrowserRouter>
      <Link to="/HOME">HOME</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Routes>
         <Route path="/HOME" element={<h1>HOMe</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>contact</h1>} />
      </Routes>
      </BrowserRouter>
     </div>
    )
}