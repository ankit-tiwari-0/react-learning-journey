import React, { useState } from 'react'
import './index.css'

const App = () => {

  const [name, setname] = useState('');
  const [nameErr, setnameErr] = useState('');

  const [password, setPassword] = useState('');
  const [passErr, setPassErr] = useState('');

  // Username Validation
  const handle = (event) => {
    const value = event.target.value;
    setname(value);

    if (value.length > 5) {
      setnameErr("Please enter valid username.");
    } else {
      setnameErr('');
    }
  };

  // Password Validation (3-10 letters/numbers)
  const handlep = (event) => {
    const value = event.target.value;
    setPassword(value);

    const regex = /^[a-zA-Z0-9]{3,10}$/;

    if (!regex.test(value)) {
      setPassErr("Password must be 3-10 letters or numbers");
    } else {
      setPassErr('');
    }
  };

  return (
    <div className='div'>

      <input
        value={name}
        className={nameErr ? 'error' : ''}
        type="text"
        onChange={handle}
        placeholder='Enter Name'
      />
      <span>{nameErr}</span>

      <input
        value={password}
        className={passErr ? 'error' : ''}
        type="text"
        onChange={handlep}
        placeholder='Enter Password'
      />
      <span>{passErr}</span>

      <button disabled={nameErr !== '' || passErr !== ''}>
        Login
      </button>

    </div>
  )
}

export default App