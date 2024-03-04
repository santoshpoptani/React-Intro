
// In React, the useRef hook is used to create a mutable ref object.
// This ref object can hold a reference to a DOM element or a React component instance. 
// The useRef hook is primarily used to access and interact with DOM elements imperatively, 
// without needing to re-render the component.

//Uses
//1. Accessing/ Interacting Dom Elements
//2. Handling Focus, Animation and Transitions
//3. Managing Timers and Intervals

import React,{useRef} from "react";

function UseRef(){

    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)
    const inputRef3 = useRef(null)

    function handelClick1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow"
        inputRef2.current.style.backgroundColor = ""
        inputRef3.current.style.backgroundColor = ""
    }

    function handelClick2(){
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = ""
        inputRef2.current.style.backgroundColor = "yellow"
        inputRef3.current.style.backgroundColor = ""
    }
    function handelClick3(){
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = ""
        inputRef2.current.style.backgroundColor = ""
        inputRef3.current.style.backgroundColor = "yellow"
    }
    return(<div>
            <button onClick={handelClick1}>Click me!</button>
            <input ref={inputRef1}></input>
            <br/>
            <button onClick={handelClick2}>Click me!</button>
            <input ref={inputRef2}></input>
            <br/>
            <button onClick={handelClick3}>Click me!</button>
            <input ref={inputRef3}></input>
    </div>)
}
export default UseRef;