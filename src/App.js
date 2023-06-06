import './App.css';
import Form from './Form';
import BirdsContainer from './BirdsContainer';
import { useState } from 'react';

function App() {
  const [birds, setBirds] = useState([{id: 1, birdName: 'Wren', date: '05-28-2023', place: 'backyard'}]);

  const submitBird = (event, newBird) => {
    event.preventDefault();
    setBirds([...birds, newBird]);
  }
  
  return (
    <div className="App">
      <h1>Life List</h1>
      <p>Record the birds you've seen.</p>

      <Form submitBird={submitBird}/>

      <BirdsContainer birds={birds}/>
    </div>
  );
}

export default App;
