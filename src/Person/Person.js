import React from 'react';
import './Person.css';
const person = (props) => {
    return(
    <div className = 'Person'> 
        <p>My name is {props.name} and my age is {props.age}</p>
        <p>{props.children}</p>
        <input type = "text" onChange={props.changed}></input>
    </div>
    )

};

export default person;