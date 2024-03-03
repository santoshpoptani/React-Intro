import React,{useState} from "react";

function ToDoList(){
    const[task , setTask] = useState(["Eat","Sleep","Code","Repeat"])
    const[newTask, setNewTask] = useState("")

    function handleInput(event){
        setNewTask(event.target.value)
    }
    function addTask(){
        if(newTask.trim()!==""){
            setTask(t=>[...t,newTask]);
            setNewTask("")
        }
       
    }
    function deleteTask(index){
        const del = task.filter((_,i)=>i!==index)
        setTask(del)
    }
    function moveTaskUp(index){
        if(index>0){
            const ntask = [...task];
            [ntask[index],ntask[index-1]] = [ntask[index-1],ntask[index]];
            setTask(ntask);
        }
    }
    function moveTaskDown(index){
        if(index<task.length-1){
            const ntask = [...task];
            [ntask[index],ntask[index+1]] = [ntask[index+1],ntask[index]];
            setTask(ntask);
        }
    }

    return(
        <div className="to-do-list">
            <div>
            <h1>To Do List App</h1>
            <input type="text" placeholder="Enter the New Task" value={newTask}
                    onChange={handleInput}/>
            <button className="add-button" onClick={addTask}>Add</button>
            </div>
            <ol>
                {task.map((task, index) => <li key={index}>
                     <span className="text">{task}</span>
                     <button className="delete-button" onClick={()=>deleteTask(index)}>Delete</button>
                     <button className="move-button" onClick={()=>moveTaskUp(index)}>☝️</button>
                     <button className="move-button" onClick={()=>moveTaskDown(index)}>👇</button>
                </li>)}

            </ol>
        </div>
        
    )
}

export default ToDoList;