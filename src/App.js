import { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

state = {
  persons: [
    {name :'Serpil', age : 28},
    {name : 'Seda', age : 25},
    {name : 'Sedef', age : 21}
  ],
  otherState: 'Some text here',
  showPersons: false
 };

 clickedButton = (event) => {
  // return console.log("clicked");
  this.setState({
    persons:[
      {name: event.target.value, age : 30},
      {name: 'Seda', age: 25},
      {name: 'Sedef', age: 20}
    ]
  });
};

togglePersonHandler = () =>{
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});

}

 render(){
   let persons = null;

   if (this.state.showPersons){
     persons = (
      <div>
        <Person 
          name = {this.state.persons[0].name} 
          age = {this.state.persons[0].age}
          changed = {this.clickedButton} />
        <Person 
          name = {this.state.persons[1].name} 
          age = {this.state.persons[1].age} >She is my sister</Person>
        <Person 
          name = {this.state.persons[2].name} 
          age = {this.state.persons[2].age} />
      </div>
     )
   }

  return (
    <div className="App">
      <h1>Hello React!</h1>
      <button onClick={this.togglePersonHandler}>Toggle Button</button>
      { persons}
    </div>
  );
 }

}

export default App;


