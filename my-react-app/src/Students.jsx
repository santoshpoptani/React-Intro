import PropTypes from 'prop-types'


//Props -> Props in React are immutable arguments or parameters passed to React components. 
//They are read-only values that can be passed across components in order to display relevant 
//data in your React apps. These props are passed to components via HTML attributes.

//PropsTypes -> a mechanism to ensure that passed avlues is of correct datadtype
// age = PropsType.number

//DefaultProps - > default props are the props they are not from parent component

function Student(props){
    return(
        <div className="student">

            <p>Name : {props.name}</p> 
            <p>Age: {props.age}</p>
            <p>Hokage: {props.isHokage ? "Yes" : "No"}</p>               

        </div>

    );
}

Student.propTypes={
    name: PropTypes.string,
    age: PropTypes.number,
    isHokage: PropTypes.bool

}

Student.defaultProps = {
    name: "Guest",
    age: 10,
    isHokage: false
}

export default Student;