function  About({newUser}){
    return(
        <div>
         <h1>About</h1>
         <input type="text" onChange={(e)=>newUser(e.target.value)} placeholder="Enter your name" />
         <hr />
        </div>
    )
}
export default About