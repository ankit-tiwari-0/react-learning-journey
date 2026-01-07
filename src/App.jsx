import { useState } from "react";


function App(){
    const [gender, setgender]=useState("");
    const [city, setcity]=useState("Noida");
    return(
        <div>
            <h1>Handle Radio and Dropdown</h1>
            <hr />
            <h2 style={{fontSize:"50px"}}>Select Genderwa</h2>
            <input type="radio" onChange={(e)=>setgender(e.target.value)} name="gender" checked={gender== 'male'} id="male" value="male" style={{ transform: "scale(2.6)", margin: "10px", }} /> 
            <label style={{fontSize: "20px", color: "red", margin: "10px"}} htmlFor="male">Male</label>

            <input type="radio"  onChange={(e)=>setgender(e.target.value)} name="gender" id="female" value="female" style={{ transform: "scale(2.6)", margin: "20px", }} /> 
            <label style={{fontSize: "20px", color: "pink", margin: "10px"}} htmlFor="female">Female</label>
            <input type="radio"  onChange={(e)=>setgender(e.target.value)} name="gender" id="female" value="Non-binary" style={{ transform: "scale(2.6)", margin: "20px", }} /> 
            <label style={{fontSize: "20px", color: "yellow", margin: "10px"}} htmlFor="Non-binary">Non-binary</label>
            <input type="radio"  onChange={(e)=>setgender(e.target.value)} name="gender"value="other" id="other" style={{ transform: "scale(2.6)", margin: "20px", }} /> 
            <label style={{fontSize: "20px", color: "blue", margin: "10px"}} htmlFor="other">Other</label>

            <h2>selected Gender: {gender}</h2>
            <h3 style={{marginTop:"50px", }}>Select city</h3>
            <select onChange={(e)=>setcity(e.target.value)} defaultValue={"Noida"} style={{ transform: "scale(1.6)", margin: "20px", }} >
                <option style={{color:"red",}} value="Noida">noida</option>
                <option value="Delhi" >nnnnn</option>
                <option value="Agra">dddd</option>
                <option value="Usmanpur">aaaa</option>
            </select>
              <h2>Selected:{city}</h2>

        </div>
    )
}

export default App;