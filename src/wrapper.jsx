function Wrapper({children, color="red"}){
    return(
        <div style={{color:color, border:"5px solid green", width:"400px", margin:"20px"}}>
              {children}
        </div>
    )
}

export default Wrapper;