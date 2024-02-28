
import React ,{useState} from "react";

function UpdateArrayState(){

    const [food , setFood] = useState(["Apple","Oragne","Banana"])
    
    function handleAdd(){
        const newFood = document.getElementById("inputFood").value;
        document.getElementById("inputFood").value =""
        setFood(f=>[...f,newFood])

    }

    function handelRemove(index){
        setFood(food.filter((_, i)=> i!==index))

    }

    return(
        <div>
            <h2>List of Fruits</h2>
            <ul>
                {food.map((item,index)=><li key={index} onClick={()=>handelRemove(index)}>{item}</li>)}
            </ul>
            <input id="inputFood" placeholder="Add Food Item" type="text"></input>
            <button onClick={handleAdd}>Add Food</button>
        </div>
    )

}

export default UpdateArrayState;