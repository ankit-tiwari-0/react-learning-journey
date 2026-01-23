// import { forwardRef } from "react"

// const UserINp=(props,hh)=>{
// return(<div>
//    <input type="text" ref={hh}  />
//    </div>
// }

// export default forwardRef(UserINp)

// new way below
const UserINp=(props)=>{
    return(
        <div>
             <input type="text" ref={props.hh}  />
        </div>
    )
}

export default UserINp