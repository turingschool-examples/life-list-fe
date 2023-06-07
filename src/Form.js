import { useState } from 'react';
import { postBird } from './apiCalls';

function Form({ addBird }) {
  const [formData, setFormData] = useState({
    birdName: "",
    date: "",
    place: ""
  });

  const [alert, setAlert] = useState("");
  
  const setValueFromForm = (event) => {
    setAlert("");
    setFormData({...formData, [event.target.name]: event.target.value});
  }

  const isFormComplete = () => {
    return !Object.values(formData).some(inputData => inputData === "");
  }

  const submitBird = (event, formData) => {
    event.preventDefault();
  
    if (isFormComplete()) {
      postBird(formData)
      .then(postBirdResult => {
        addBird(postBirdResult);
        setFormData({ birdName: "", date: "", place: "" });
      })
      .catch(err => console.error(err));
    } else {
      setAlert("Form is incomplete. All fields need to be filled in.");
    }
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

      <p>{alert}</p>

      <button onClick={(event) => submitBird(event, formData)} >Add Bird!</button>
    </form>
  )
}

export default Form;