import './App.css';
import Form from './Form';
import BirdsContainer from './BirdsContainer';
import { useState, useEffect } from 'react';
import { getBirds } from './apiCalls';

function App() {
  const [birds, setBirds] = useState([]);

  useEffect(() => {
    getBirds()
      .then(birdData => setBirds(birdData.birds))
      .catch(err => console.error(err));
  }, []);

  const addBird = newBird => {
    setBirds([...birds, newBird]);
  };

  return (
    <div className="App">
      <h1>Life List</h1>
      <p>Record the birds you've seen.</p>

      <Form addBird={addBird}/>

      <BirdsContainer birds={birds}/>
    </div>
  );
}

export default App;
