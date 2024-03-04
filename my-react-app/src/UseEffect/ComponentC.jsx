import React,{useContext} from "react";
import { AppContext } from "./ComponentA";
function ComponentC(){
    const user = useContext(AppContext);
    
    return(<div className="box">
    <h1>ComponnetC</h1>
    <h2>{`Hello From Component C ${user}`}</h2>

</div>)
}

export default ComponentC;