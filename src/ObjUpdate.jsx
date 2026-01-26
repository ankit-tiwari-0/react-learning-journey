import { useState } from "react";

function Objectupdate() {

  // State is an object with nested object (address)
  // React state should NEVER be updated directly
  const [data, setdata] = useState({
    name: 'Anket',
    address: {
      city: 'Delhi',
      countery: 'India'
    }
  });

  // This function updates ONLY the name
  const HandleName = (value) => {
    setdata({
      ...data,          // copy the whole previous state object
      name: value       // update only the name field
    });
  };

  // This function updates ONLY the city (nested object)
  const HandleCity = (value) => {
    setdata({
      ...data,          // copy the parent object
      address: {
        ...data.address, // copy the nested address object
        city: value      // update only the city
      }
    });
  };

  return (
    <div>
      <h1>Updating objects in state</h1>

      {/* Input to update name */}
      <input
        type="text"
        placeholder="Update name"
        onChange={(e) => HandleName(e.target.value)}
      />

      {/* Input to update city */}
      <input
        type="text"
        placeholder="Update city"
        onChange={(e) => HandleCity(e.target.value)}
      />

      {/* Display updated values */}
      <h2>Name: {data.name}</h2>
      <h2>City: {data.address.city}</h2>
      <h2>Country: {data.address.countery}</h2>
    </div>
  );
}

export default Objectupdate;
