import React, { useState } from 'react'

const AddUser = () => {
  const [firstName, setName] = useState("");
  const [lastName, setLast] = useState("");
  const [age, setage] = useState("");
  
  const CreateUser=async()=>{
    console.log(firstName,lastName, age);
    const url="http://localhost:3000/users";
    let response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ firstName, lastName, age }),
  });

  response = await response.json();

  if (response) {
    alert("New user added");
  }
};
  return (
     <div style={{ textAlign: "center" }}>
      <h1>Add New User</h1>
      
      <input
        type="text"
        placeholder="Enter name"
        onChange={(event) => setName(event.target.value)}
        value={firstName}
      />
      <br />
      <br />
      
      <input
        type="text"
        placeholder="Last Name"
        onChange={(event) => setLast(event.target.value)}
        value={lastName}
      />
      <br />
      <br />
      
      <input
        type="text"
        placeholder="Enter Age"
        onChange={(event) => setage(event.target.value)}
        value={age}
      />
      <br />
      <br />
      
      <button onClick={CreateUser}>Add User</button>
    </div>
  )
}

export default AddUser