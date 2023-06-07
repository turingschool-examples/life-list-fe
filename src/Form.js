import { useState } from 'react';
import { postBird } from './apiCalls';

function Form({ addBird }) {
  const [formData, setFormData] = useState({
    birdName: "",
    date: "",
    place: ""
  });
  
  const setValueFromForm = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  const submitBird = (event, formData) => {
    event.preventDefault();
    postBird(formData)
      .then(postBirdResult => {
        addBird(postBirdResult);
        setFormData({ birdName: "", date: "", place: "" });
      })
      .catch(err => console.error(err));
  }

  return (
    <form>
      <label htmlFor="birdName">Name:</label>
      <input 
        name="birdName"
        type="text"
        placeholder="Bird Name"
        onChange={setValueFromForm} 
        value={formData.birdName}
      />
      
      <label htmlFor="date">Date:</label>
      <input 
        name="date" 
        type="date" 
        placeholder="Date Spotted" 
        onChange={setValueFromForm}
        value={formData.date}
      />
      
      <label htmlFor="place">Place:</label>
      <input 
        name="place" 
        type="text" 
        placeholder="Place Spotted" 
        onChange={setValueFromForm}
        value={formData.place}
      />

      <button onClick={(event) => submitBird(event, formData)} >Add Bird!</button>
    </form>
  )
}

export default Form;