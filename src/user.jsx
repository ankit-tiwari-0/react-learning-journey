function User({user}){
    return(
        <div>
            <hr />
            <h1>name:{user.Name}</h1>
            <h1>age:{user.age}</h1>
            <h2>gmail:{user.gmail}</h2>
        </div>
    )
}
export default User;