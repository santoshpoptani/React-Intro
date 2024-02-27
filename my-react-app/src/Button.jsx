
function Button(){

    const callback = ()=> console.log("Hello I am Button")
    
    const callback2 = (name)=>console.log(`${name} stop clicking me`);

    const callback3 = (e)=> e.target.textContent = "Ouch!"

return(<button onClick={(e)=>callback3(e)}>Click Me </button>)
}

export default Button;