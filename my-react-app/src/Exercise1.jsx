//https://excuser-three.vercel.app/v1/excuse/party/

import React ,{useState} from "react";
import axios from "axios";
function Exercise1(){
    const[generaetdExcuses, setgeneraetdExcuses] = useState("")
    const[type,setType] = useState("")
    const fetxhExcuse= (excuse)=>{
        axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}`)
        .then((res)=>{
            setgeneraetdExcuses(res.data[0].excuse)
            setType(res.data[0].category)
        })
    }

    return(
        <div>
            <h2>Excuse App </h2>
            <button onClick={()=>fetxhExcuse("party")}>Party</button>
            <button onClick={()=>fetxhExcuse("family")}>Family</button>
            <button onClick={()=>fetxhExcuse("office")}>Office</button>
            <br/>
            <p>{generaetdExcuses}</p>
        </div>
    )
}

export default Exercise1;