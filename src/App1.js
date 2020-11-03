import { useState } from 'react';
import './App.css';
import Person from './Person/Person'

function App1 (props){

 
  const [personState, setPersonState] = useState({
    persons: [
      {name :'Serpil', age : 28},
      {name : 'Seda', age : 25},
      {name : 'Sedef', age : 21}
    ],
    otherState: 'Some text here'
  });

  const clickedButton = () =>{
    setPersonState({
      persons:[
        {name: 'Sevil', age : 30},
        {name: 'Seda', age: 25},
        {name: 'Sedef', age: 20}
      ]
    });
  }

  console.log(personState);



  return (
    <div className="App">
      <h1>Hello React!</h1>
      <button onClick={clickedButton}>Click button</button>
      <Person name = {personState.persons[0].name} age = {personState.persons[0].age}  />
      <Person name = {personState.persons[1].name} age = {personState.persons[1].age}  >She is my sister</Person>
      <Person name = {personState.persons[2].name} age = {personState.persons[2].age}   />
    </div>
  );

}

export default App1;