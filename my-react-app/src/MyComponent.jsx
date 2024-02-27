
//In React, hooks are functions that allow you to use state and other React
// features in functional components. 

// useState is a React hook that allows functional components to manage state. 
// It is a function provided by React that enables you to add stateful logic
//  to functional components without using class components.


import React,{useState} from "react";

function MyComponent(){
const [name, setName] = useState("Guest");
const update = ()=>{
    setName("Madra Uchiha")
}

const[age , setAge] = useState(0);
const updateAge = ()=>{
    setAge(age+1)
}

const[isEmpoyeed, setIsEmployeed] = useState(false)
const UpdateEmployee = ()=>{
    setIsEmployeed(!isEmpoyeed)
}
    
return(<div>
<p>Name : {name}</p>
<button onClick={update}>Update</button>

<p>Age : {age}</p>
<button onClick={updateAge}>Increment</button>

<p>IsEmpoyee : {isEmpoyeed ? "Yes" : "No"}</p>
<button onClick={UpdateEmployee}>Toggele</button>
</div>);

}

export default MyComponent;