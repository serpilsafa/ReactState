import { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

state = {
persons: [
  {id: 'person1', name :'Serpil', age : 28},
  {id: 'person2', name : 'Seda', age : 25},
  {id: 'person3', name : 'Sedef', age : 21}
],
otherState: 'Some text here',
showPersons: false
};

nameChangedHandler = (event, personId) => {
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === personId;
  });

  const person = {...this.state.persons[personIndex]}
  person.name = event.target.value;
  const persons = [...this.state.persons];
  persons[personIndex] = person;
  this.setState({persons:persons});

  };

togglePersonHandler = () =>{
const doesShow = this.state.showPersons;
this.setState({showPersons: !doesShow});
}

deletePersonHandler = (personIndex) =>{
  const persons = [...this.state.persons];
  persons.splice(personIndex, 1);
  this.setState({persons: persons})
}

render(){
  let persons = null;

  if (this.state.showPersons){
    persons = (
    <div>
      {
        this.state.persons.map( (person, index) => {
          return <Person
            key = {person.id}
            name = {person.name} 
            age = {person.age}
            changed = {(event)=>this.nameChangedHandler(event, person.id)}
            click ={()=>this.deletePersonHandler(index)} />
        })
      }
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


