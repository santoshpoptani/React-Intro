//onChange-> eventhandler used primarily with forms element
//           ex . input , radio , select , textarea
//           Triggers a functions every time a value of input changes

import React , {useState} from "react"

function OnChangeEvent(){

    const [name , setName] = useState();
    function handleNameChange(event){
        setName(event.target.value)
    }

    const [payment , setPayment] = useState();
    function handleSelect(event){
        setPayment(event.target.value)
    }
    return(
        <div>
            <input type="text" onChange={handleNameChange}/>
            <p>Name: {name}</p>

            <select value={payment} onChange={handleSelect}>
                <option value="" > Select An Otpion for payment</option>
                <option value="Visa" > Visa</option>
                <option value="Mastercard" > MasterCard</option>
                <option value="GiftCard" >GiftCard</option>

            </select>
            <p>Payment: {payment}</p>
        </div>
    )

}

export default OnChangeEvent