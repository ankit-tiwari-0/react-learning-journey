import React, { useActionState } from 'react'

const App = () => {
    const handlee = (predata, formdata) =>{
        let name = formdata.get('name')
        let password = formdata.get('password')
        let regex = /^[a-zA-Z0-9]{3,10}$/;

        if(name.length > 5){
            return{error: 'Name should not container more then 5 '}
        }else if(!regex.test(password)){
            return{error: "Password can container only number"}
        }else{
            return{message:'Login done'}
        }
    }
    const [data, action ,pending]= useActionState(handlee);
    console.log(data);
    
  return (
    <div className='div'>
      <form action={action}>
        <input type="text" name='name' placeholder='Enter name' />
        <input type="text" name='password' placeholder='Enter password' />
        <button>LOgin</button>
      </form>
    </div>
  )
}

export default App