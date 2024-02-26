
import PropTypes from "prop-types";

//Its condition rendering 
// Based on the conditions the component is renderd

function UserGreatings(props){

    const welcomeMessage = <h2 className="welcome-message">Welcome Lord {props.username}</h2>
    const loginprompt = <h2 className="login-prompt">Welcome Guest</h2>

    return(props.isLoggedIn ?   welcomeMessage : loginprompt);

//we Will use ternary operator
    
    // if(props.isLoggedIn){
    //    return( 
    //    <h2>
    //         Welcome Lord {props.username}
    //     </h2>
    //    )
    // }

    // return(
    // <h2>
    //     Welcome Guest
    // </h2>
    // )
}

UserGreatings.prototype = {
    isLoggedIn : PropTypes.bool,
    username : PropTypes.string

}

export default UserGreatings;