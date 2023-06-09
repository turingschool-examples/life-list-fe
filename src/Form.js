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
      <div className="input-group">
        <label htmlFor="birdName">Bird Name:</label>
        <input 
          name="birdName"
          type="text"
          placeholder="Name"
          onChange={setValueFromForm} 
          value={formData.birdName}
        />
      </div>
      
      <div className="input-group">
        <label htmlFor="date">Date Spotted:</label>
        <input 
          name="date" 
          type="date" 
          onChange={setValueFromForm}
          value={formData.date}
        />
      </div>
      
      <div className="input-group">
        <label htmlFor="place">Place Spotted:</label>
        <input 
          name="place" 
          type="text" 
          placeholder="Place" 
          onChange={setValueFromForm}
          value={formData.place}
        />
      </div>

      <p>{alert}</p>

      <button className="btn" onClick={(event) => submitBird(event, formData)} >Add Bird!</button>
    </form>
  )
}

export default Form;