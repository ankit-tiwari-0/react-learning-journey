function Student({collage}){
    return(
        <div>
            <h3>Student</h3>
            {
                collage.map((Student,index)=>(
                    <ul key={index}>
                     <li>Name: {Student.Name}</li>
                     <li>Age: {Student.Age}</li>
                     <li> Email:  {Student.Email}</li>
                    </ul>
                ))

            }
            
        </div>
    )
}
export default Student;