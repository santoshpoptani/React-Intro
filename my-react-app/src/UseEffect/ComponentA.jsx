import ComponentB from "./ComponentB";
import React ,{useState,createContext} from "react";

//UserContetx -> ReactHook that allows you to share between multiple levels
//                  of components without passing the props thorough each level
//
//Provider Component
//1. Impoer {CreateContext} from 'react'
//2. export const MyContext = createContext();
//3. <MyContext.Provider value = {value}>
//          <child/>
//   <MyContext/>

//Consumer Component
//1. import { MyContext } from "./ComponentA";
//   import React,{useContext} from "react";
//2. const user = useContext(MyContext);

export const AppContext = createContext();

function ComponentA(){

    const[username, setUserName] = useState("Santosh")

    return(<div className="box">
        <h1>ComponnetA</h1>
        <h2>{`Hello ${username}`}</h2>
        <AppContext.Provider value={username}>
        <ComponentB/>
        </AppContext.Provider>
       
    </div>)
}

export default ComponentA;