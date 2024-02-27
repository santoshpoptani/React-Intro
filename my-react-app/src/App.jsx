import Cards from "./Cards";
import Student from "./Students";
import UserGreatings from "./UserGreeting";
import List from "./List";
import Button from "./Button";
import MyComponent from "./MyComponent";
import Counter from "./Counter";

//This is also a component but act as a parent component 

function App(){

    return(

            <>
           <Counter/>
            </>
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