import Cards from "./Cards";
import Student from "./Students";
import UserGreatings from "./UserGreeting";
import List from "./List";
import Button from "./Button";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import OnChangeEvent from "./OnChangeEvent";
import ColourPicker from "./ColourPicker";
import UpdateObjectState from "./UpdateObjectinstate";
import UpdateArrayState from "./UpdateArrayState";
import ToDoList from "./ToDoList";
import UseEffectP1 from "./UseEffectP1";
import UseEffectP2 from "./UseEffectP2";
import Exercise1 from "./Exercise1";
import ComponentA from "./UseEffect/ComponentA";
import UseRef from "./UseRef";
import ReactRouterDom from "./ReactRouterDom";
//This is also a component but act as a parent component 

function App(){

    return(

            <>
           <ReactRouterDom/>
            </>
            //<UseRef/>
            //<Exercise1/>
            //<UseEffectP1/>
            //<UseEffectP2/>
            //<ToDoList/>
            //<UpdateArrayState/>
            // <UpdateObjectState/>
            //<ColourPicker/>
            // <OnChangeEvent/>
            //<Counter/>
            //<MyComponent/>
            // <Button/>
            //<List/> 

       // <UserGreatings isLoggedIn={false} username = "Minato Namikaze"/>


        // <>
        // <Student name="Minato Namikaze" age={28} isHokage={true} />
        // <Student name="Madara Uchiha" age={35} isHokage={false} />
        // <Student name="Hasiram Senju" age={28} isHokage={true} />
        // <Student name="Lary" />
        // </>

        //<Cards/>
    );

}


export default App;