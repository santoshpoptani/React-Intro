import Minato from "./assets/MinatoNamikaze.jpg"

// In React we Create the Component as shown below
// as a function  return some html and javascript code in it 
// and export the moduele 
// it can be imporeted as acomponent any where
// it this example we imported cards component in App.jsx


function Cards(){
    return(

        <div className="card">
            <img className="card-img" src={Minato} alt="Tom Image"></img>
            <h2>Minato Namikaze</h2>
            <p>I am 4th Kage of Konoha</p>
        </div>


    );

}

export default Cards;