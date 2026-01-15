import UserProfile from "./UserProfile";

function Module(){
    return(
        <>
        <h1>Style with css Module in React js </h1>
        <div style={{display:"flex",flexWrap:"wrap"}}>
         <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
        </div>
       
        </>
    )
}
export default Module;