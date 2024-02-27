

function List(){

    const fruit = [
        {id:1,name:"Appple",cal:70},
        {id:2,name:"Orange",cal:50},
        {id:3,name:"Banana",cal:20},
        {id:4,name:"PineApple",cal:100},
        {id:5,name:"Mango",cal:105}
    ];

    //Lest implemet our own sort
    //fruit.sort((a,b)=> a.name.localeCompare(b.name))//Alphabatical
    //fruit.sort((a,b)=> b.name.localeCompare(a.name))// Reverse Alphabatical
    //fruit.sort((a,b)=> a.cal-b.cal) //numeric
    //fruit.sort((a,b)=> b.cal - a.cal) // reversenumeric

    const lowCaloriFruit = fruit.filter((fruit)=> fruit.cal<100)


    //this is how we render list of complex data;
    // list require unique key
    const FruitItem = lowCaloriFruit.map(fruit => <li key={fruit.id}>
                                                {fruit.name} &nbsp;
                                                <b>{fruit.cal}</b>
                                        </li>)

    return(<ol>{FruitItem}</ol>);


}

export default List;