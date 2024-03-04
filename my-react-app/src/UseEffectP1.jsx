
import React, {useEffect,useState} from "react"
import Axios from "axios"

function UseEffectP1(){
    const[catFact, setCatFact] = useState("")

    useEffect(()=>{
        console.log('heyy')
        fetchCatFact()
    },[])
    
    const fetchCatFact = ()=>{
        Axios.get("https://catfact.ninja/fact").then((res)=>{
            setCatFact(res.data.fact);
        });
    }

    return(<div>
        <button onClick={fetchCatFact}>Generate Cat Fact</button>
        <p>{catFact}</p>
    </div>)
}

export default UseEffectP1