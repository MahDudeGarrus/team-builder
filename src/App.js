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

  return (
    <div className="App">
      <Form values={formVal} />

    </div>
  );
}