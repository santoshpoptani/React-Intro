import React,{useEffect,useState} from "react";
import axios from "axios";


// This is not the example of UesEffect
// It simply Fetchdata from api using Axios Library

function UseEffectP2(){
//https://api.agify.io/?name=Jhon

    const[data, setData] = useState(null)
    const[name, setName] = useState("")

    const guessAge= ()=>{
        axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{   
        setData(res.data)
        })
    }

    function handleInput(event){
        setName(event.target.value)
    }


    return(<div>
        <input placeholder="Name" onChange={handleInput}></input> <br/>
    <button onClick={guessAge}>Predicate Age</button>
    <p>Name: {data?.name}</p>
    <p>age: {data?.age}</p>
    <p>Count: {data?.count}</p>
    </div>)
}

export default UseEffectP2;