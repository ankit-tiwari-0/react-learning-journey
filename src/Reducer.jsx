import React, { act, useReducer } from 'react'
 const emptyData ={
        Name:'',
        Password:'',
        Email:'',
        city:'',
        address:'',
    }

const reducer=(data,action)=>{
    return {...data,[action.type]:action.val}
    
}    
const App = () => {
   
    const [state,dispatch]=useReducer(reducer,emptyData)
    // console.log(state);
    
  return (
    <div>
        <h1>Use Reducer</h1>
        <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'name'})} placeholder='Enter name' />
        <br />
        <input type="text"  onChange={(event)=>dispatch({val:event.target.value,type:'password'})} placeholder='Enter password' />
        <br />
        <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'email'})} placeholder='Enter email' />
        <br />
        <input type="text"  onChange={(event)=>dispatch({val:event.target.value,type:'city'})}placeholder='Enter city' />
        <br />
        <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'address'})} placeholder='Enter address' />
        <br />
        <ul>
            <li>Name: {state.name}</li>
            <li>Pass: {state.password}</li>
            <li>Email: {state.email}</li>
            <li>City: {state.city}</li>
            <li>Address: {state.address}</li>
        </ul>
        <button>Add Details</button>

    </div>
  )
}

export default App