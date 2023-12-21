import { useState } from "react";
const Butao= ()=>{
    const [numero,setNumero]=useState(2);

  
    return(
    
        <div>
            <p>numero1 :{numero}</p>

            <button onClick={()=>setNumero((atual)=>atual*2)}>Clique aqui</button>
        </div>
    )
}
export default Butao;