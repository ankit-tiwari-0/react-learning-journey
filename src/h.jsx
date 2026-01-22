function User({helo,name,other}){
   
    return(
        <div>
            <button onClick={()=>helo(name)}>DisplayName</button>
            <button onClick={()=>other()}>get</button>
        </div>
    )
}

export default User