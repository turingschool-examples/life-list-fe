import './App.css';
import Form from './Form';
import BirdsContainer from './BirdsContainer';
import { useState } from 'react';

function App() {
  const [birds, setBirds] = useState([{id: 1, birdName: 'Wren', date: '05-28-2023', place: 'backyard'}]);
  
  return (
    <div className="App">
      <h1>Life List</h1>
      <p>Record the birds you've seen.</p>

      <Form />

      <BirdsContainer birds={birds}/>
    </div>
  );
}

export default App;
