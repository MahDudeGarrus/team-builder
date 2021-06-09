import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './components/Form';

const initialFormVal = {
  firstname: '',
  lastname: '',
  age: '',
  warclass: '',
  species: '',
  bio: '',
}

export default function App() {
const [meBuddies, setMeBuddies] = useState([])

const [formVal, setFormVal] = useState(initialFormVal)

const updateForm = (inputName, inputValue) => {
  setFormVal({...formVal, [inputName]: inputValue })
}

const submitForm = () => {
  const newSquadmate = {
    firstname: formVal.firstname.trim,
    lastname: formVal.lastname.trim,
    age: formVal.age.trim,
    warclass: formVal.warclass,
    species: formVal.species,
    bio: formVal.bio.trim,
  }
}

  return (
    <div className="App">
      <Form values={formVal} update={updateForm} submit={submitForm}/>

    </div>
  );
}