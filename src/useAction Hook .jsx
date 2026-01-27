import { useActionState } from "react"

function UseAction(){
    const Handlesubmit = async(previousData,formData)=>{
        let name=formData.get('name')
        let password=formData.get('password')
        await new Promise(res=>setTimeout(res,1000))
        // console.log("Handlesubmit called",name,password);
        if (name && password){
            return{message:'Data Submitted',name,password}
        }else{
            return{error:'Failed to Submit. Enter proper data',name,password}
        }
        
    }
    const [data,action,pending]=useActionState(Handlesubmit,undefined)
    console.log(data);
    
    return(
        <div>
            <h1>useAction Hook in React js</h1>
            <form action={action}>
                <input type="text" placeholder="Enter name " name="name" />
                <br /><br />
                <input type="text" placeholder="Enter password " name="password" />
                <br /><br />
                 <button disabled={pending}>Submit Data</button>
            </form>
            {
                data?.error && <span style={{color:'red'}}>{data?.error}</span>
            }
            {
                data?.message && <span style={{color:'green'}}>{data?.message}</span>
            }
            <h3>Name : {data?.name}</h3>
            <h3>PASSword : {data?.password}</h3>
        </div>
    )
}
export default UseAction



// import { useActionState } from "react";

// function UseAction() {

//   // This function runs when the form is submitted
//   // previousData → last returned data (not used here)
//   // formData → contains form input values
//   const Handlesubmit = async (previousData, formData) => {

//     // Get input values using name attribute
//     let name = formData.get('name');
//     let password = formData.get('password');

//     // Fake delay to simulate API/server request
//     await new Promise(res => setTimeout(res, 1000));

//     // If both name and password are entered
//     if (name && password) {
//       // Whatever we return becomes "data"
//       return {
//         message: 'Data Submitted',
//         name,
//         password
//       };
//     } 
//     // If any field is missing
//     else {
//       return {
//         error: 'Failed to Submit. Enter proper data',
//         name,
//         password
//       };
//     }
//   };

//   // useActionState returns 3 things:
//   // data    → result returned from Handlesubmit
//   // action  → function used in <form action={action}>
//   // pending → true while form is submitting
//   const [data, action, pending] = useActionState(Handlesubmit, undefined);

//   // Log data to see response in console
//   console.log(data);

//   return (
//     <div>
//       <h1>useAction Hook in React js</h1>

//       {/* Form automatically calls Handlesubmit */}
//       <form action={action}>

//         {/* Input field for name */}
//         <input
//           type="text"
//           placeholder="Enter name"
//           name="name"
//         />

//         <br /><br />

//         {/* Input field for password */}
//         <input
//           type="text"
//           placeholder="Enter password"
//           name="password"
//         />

//         <br /><br />

//         {/* Button disabled while submission is in progress */}
//         <button disabled={pending}>
//           Submit Data
//         </button>
//       </form>

//       {/* Show error message if submission fails */}
//       {
//         data?.error && (
//           <span style={{ color: 'red' }}>
//             {data.error}
//           </span>
//         )
//       }

//       {/* Show success message if submission succeeds */}
//       {
//         data?.message && (
//           <span style={{ color: 'green' }}>
//             {data.message}
//           </span>
//         )
//       }

//       {/* Display submitted values */}
//       <h3>Name : {data?.name}</h3>
//       <h3>Password : {data?.password}</h3>
//     </div>
//   );
// }

// export default UseAction;
