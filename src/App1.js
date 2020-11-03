import { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App1 extends Component {

  clickedButton = () => {
   // return console.log("clicked");
   this.setState({
     persons:[
       {name: 'Sevil', age : 30},
       {name: 'Seda', age: 25},
       {name: 'Sedef', age: 20}
     ]
   });
 };

state = {
  persons: [
    {name :'Serpil', age : 28},
    {name : 'Seda', age : 25},
    {name : 'Sedef', age : 21}
  ],
  otherState: 'Some text here'
 };


 render(){
  return (
    <div className="App">
      <h1>Hello React!</h1>
      <button onClick={this.clickedButton}>Click button</button>
      <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age}  />
      <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}  >She is my sister</Person>
      <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age}   />
    </div>
  );
 }

}

export default App1;
