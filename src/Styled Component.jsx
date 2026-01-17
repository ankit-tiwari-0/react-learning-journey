import styled from "styled-components"
function Style(){
    const Heading = styled.h1`
    color:pink;
    border:1px solid grey;
    width:300px;
    margin:20px;
    padding:10px;
    `
    //    Diffirent way to use Styled 
    const Para =styled.p({
     color:"white",
    border:"1px solid grey",
    
    width:"500px",
    margin:"20px",
    padding:"10px"
    })
    

    return(
        <>
        <h1>Styled Component with react js</h1>
        <Heading> Hello Styled </Heading>
        <Para>
          Styled Components in React JS allow developers to write CSS inside JavaScript files for component-level styling. They prevent style conflicts by scoping styles to individual components and support dynamic styling using props. This approach improves code readability, reusability, and maintainability.  
        </Para>

        </>
    )
}
export default Style