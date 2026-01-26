import { useState } from "react";

export default function Array() {

  // STATE 1:
  // "data" is an array of names (strings)
  // setdata is used to update this array
  const [data, setdata] = useState([
    'anil',   // index 0
    'sam',    // index 1
    'peter'   // index 2 (last element)
  ]);

  // STATE 2:
  // "dataDetails" is an array of objects
  // Each object has name and age
  const [dataDetails, setdetails] = useState([
    { name: 'anil', age: '25' },
    { name: 'patel', age: '20' },
    { name: 'rinku', age: '29' } // last object
  ]);

  // FUNCTION:
  // This updates ONLY the last name in the data array
  const handelUser = (name) => {

    // Step 1: Create a COPY of the data array
    // We never change the original state directly
    const newData = [...data];

    // Step 2: Change the last element of copied array
    newData[newData.length - 1] = name;

    // Step 3: Update state with the new array
    setdata(newData);
  };

  // FUNCTION:
  // This updates ONLY the age of the last user
  const handelage = (age) => {

    // Step 1: Copy the array (important)
    const newDetails = [...dataDetails];

    // Step 2: Copy the last object and update only age
    newDetails[newDetails.length - 1] = {
      ...newDetails[newDetails.length - 1], // copy old object
      age: age                              // change age
    };

    // Step 3: Set the new array in state
    setdetails(newDetails);
  };

  return (
    <div>
      <h1>Updating Array in state</h1>

      {/* INPUT:
          When typing, it updates the LAST name in data array */}
      <input
        type="text"
        placeholder="Enter last User name"
        onChange={(e) => handelUser(e.target.value)}
      />

      {/* SHOW ALL NAMES FROM data ARRAY */}
      {
        data.map((item, index) => (
          <h3 key={index}>{item}</h3>
        ))
      }

      <hr />

      {/* INPUT:
          When typing, it updates the AGE of LAST user */}
      <input
        type="text"
        placeholder="Enter last User age"
        onChange={(e) => handelage(e.target.value)}
      />

      {/* SHOW NAME AND AGE FROM dataDetails ARRAY */}
      {
        dataDetails.map((item, index) => (
          <h2 key={index}>
            {item.name} : {item.age}
          </h2>
        ))
      }
    </div>
  );
}
