import { useState } from "react";

function Id(){
    const [card, setcard]=useState({
     border:"2px solid #d219193b",
     width:"200px",
     boxShadow:"1px 2px 3px 0px #cccccc57",
     margin:"10px"

    })

    const [color, setcolor]=useState("yellow")
    const[grid, setgrid]=useState(true)

    const update=(bgcolor,textcolor)=>{
    setcard({...card,backgroundColor:bgcolor,color:textcolor})
    setcolor(textcolor)
    }
    

    return(
        <>
        <h1 style={{color:"red"}}>Dynamic and Conditional Inline style</h1>

        <button onClick={()=>update('grey','orange')}>Grey Theme</button>
        <button onClick={()=>update('black','pink')}>Default</button>
        <button onClick={()=>setgrid(!grid)}>TOggke</button>
        <div style={{display:grid? "flex":'block',flexWrap:"wrap" }}>
            <div style={card}>
                <img style={{width:'200px'}} src="https://png.pngtree.com/png-vector/20240130/ourmid/pngtree-male-cartoon-man-surprising-look-png-image_11506823.png"  />

                <div style={{padding:"10px",color:color}}>
                   <h3>Devil</h3>
                   <p>Software developer</p> 
                </div>
            </div>
            <div style={card}>
                <img style={{width:'200px'}} src="https://png.pngtree.com/png-vector/20240130/ourmid/pngtree-male-cartoon-man-surprising-look-png-image_11506823.png"  />

                <div style={{padding:"10px",color:color}}>
                   <h3>Devil</h3>
                   <p>Software developer</p> 
                </div>
            </div>
            <div style={card}>
                <img style={{width:'200px'}} src="https://png.pngtree.com/png-vector/20240130/ourmid/pngtree-male-cartoon-man-surprising-look-png-image_11506823.png"  />

                <div style={{padding:"10px",color:color}}>
                   <h3>Devil</h3>
                   <p>Software developer</p> 
                </div>
            </div>
            <div style={card}>
                <img style={{width:'200px'}} src="https://png.pngtree.com/png-vector/20240130/ourmid/pngtree-male-cartoon-man-surprising-look-png-image_11506823.png"  />

                <div style={{padding:"10px",color:color}}>
                   <h3>Devil</h3>
                   <p>Software developer</p> 
                </div>
            </div>
            <div style={card}>
                <img style={{width:'200px'}} src="https://png.pngtree.com/png-vector/20240130/ourmid/pngtree-male-cartoon-man-surprising-look-png-image_11506823.png"  />

                <div style={{padding:"10px",color:color}}>
                   <h3>Devil</h3>
                   <p>Software developer</p> 
                </div>
            </div>
            <div style={card}>
                <img style={{width:'200px'}} src="https://png.pngtree.com/png-vector/20240130/ourmid/pngtree-male-cartoon-man-surprising-look-png-image_11506823.png"  />

                <div style={{padding:"10px",color:color}}>
                   <h3>Devil</h3>
                   <p>Software developer</p> 
                </div>
            </div>
            <div style={card}>
                <img style={{width:'200px'}} src="https://png.pngtree.com/png-vector/20240130/ourmid/pngtree-male-cartoon-man-surprising-look-png-image_11506823.png"  />

                <div style={{padding:"10px",color:color}}>
                   <h3>Devil</h3>
                   <p>Software developer</p> 
                </div>
            </div>
            <div style={card}>
                <img style={{width:'200px'}} src="https://png.pngtree.com/png-vector/20240130/ourmid/pngtree-male-cartoon-man-surprising-look-png-image_11506823.png"  />

                <div style={{padding:"10px",color:color}}>
                   <h3>Devil</h3>
                   <p>Software developer</p> 
                </div>
            </div>
            <div style={card}>
                <img style={{width:'200px'}} src="https://png.pngtree.com/png-vector/20240130/ourmid/pngtree-male-cartoon-man-surprising-look-png-image_11506823.png"  />

                <div style={{padding:"10px",color:color}}>
                   <h3>Devil</h3>
                   <p>Software developer</p> 
                </div>
            </div>
            <div style={card}>
                <img style={{width:'200px'}} src="https://png.pngtree.com/png-vector/20240130/ourmid/pngtree-male-cartoon-man-surprising-look-png-image_11506823.png"  />

                <div style={{padding:"10px",color:color}}>
                   <h3>Devil</h3>
                   <p>Software developer</p> 
                </div>
            </div>
            
             </div>
        </>
    )
}
export default Id;