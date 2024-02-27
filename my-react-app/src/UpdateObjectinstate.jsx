
import React,{useState} from "react";

// Changing state of Object

function UpdateObjectState(){
const[car, setCar] = useState({year:2024,
                               company:"Ford",
                               model:"Mustang"})

function handleYearChange(event){
    // what actully happens
    //{year:2024,company:ford,model:Mustang, year:2025}
    setCar({...car,year:event.target.value});
}
function handelComapnyChange(event){
    setCar({...car,company : event.target.value})
}

function handelModelChange(event){
    setCar({...car,model : event.target.value})
}

return(<div>
    <p>Your favourate car is : {car.year} {car.company} {car.model}</p>
    <input type="number" value={car.year} onChange={handleYearChange}></input>
    <input type="text" value={car.company} onChange={handelComapnyChange}></input>
    <input type="text" value={car.model} onChange={handelModelChange}></input>
</div>)
}

export default UpdateObjectState