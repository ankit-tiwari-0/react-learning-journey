function Use({useee}){
    return(
        <div style={{
            border:"2px solid yellow",
            padding:"10px",
            margin:"10px",
            width:"400px",
            borderRadius:"50px"
        }}>
        <h2>Name:  <span style={{color:"orange"}}>{useee.Name}</span></h2>
        <h2>AGE: <span style={{color:"pink"}}>{useee.Age}</span></h2>
        <h2>HEIGHT: <span style={{color:"green"}}>{useee.Height}</span></h2>
        <h2>GENDER: {useee.Gender}</h2>
        </div>
    )
}
export default Use;