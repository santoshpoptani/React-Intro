
import {useNavigate,useParams} from 'react-router-dom'

function Profile(){
        let navigate = useNavigate();
        let {username} = useParams();
    return(<div>
        <h1>This is Profile Page  for {username} </h1>
        <button onClick={()=>{navigate("/")}}>Go to Home Page</button>
    </div>)
}

export default Profile;