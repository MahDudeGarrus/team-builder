import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import NewSquadeMate from './components/NewSquadeMate'

const arrayOfBuddies = [{
  firstname: '',
  lastname: '',
  age: '',
  warclass: '',
  species: '',
  bio: '',
}]

const initialFormVal = {
  firstname: '',
  lastname: '',
  age: '',
  warclass: '',
  species: '',
  bio: '',
}

export default function App() {
const [meBuddies, setMeBuddies] = useState([arrayOfBuddies])

const [formVal, setFormVal] = useState(initialFormVal)

const updateForm = (inputName, inputValue) => {
  setFormVal({...formVal, [inputName]: inputValue })
}

const submitForm = () => {
  const newSquadmate = {
    id: Date.now(),
    firstname: formVal.firstname.trim,
    lastname: formVal.lastname.trim,
    age: formVal.age.trim,
    warclass: formVal.warclass,
    species: formVal.species,
    bio: formVal.bio.trim,
  }
  setMeBuddies([...meBuddies, newSquadmate])
  setFormVal(initialFormVal)
}

  return (
    <div className="App">
      <Form values={formVal} update={updateForm} submit={submitForm}/>
      {meBuddies.map(squadmate => {
        return(<NewSquadeMate key={initialFormVal.bio} squadmate={formVal}/>)
      })}
      
    </div>
  );
}