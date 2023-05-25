function Form() {
  return (
    <form>
      <label for="bird-name">Name:</label>
      <input name="bird-name" type="text" placeholder="Bird name..." />
      
      <label for="date">Date:</label>
      <input name="date" type="text" placeholder="Date spotted..." />
      
      <label for="place">Place:</label>
      <input name="place" type="text" placeholder="Place spotted..." />
    </form>
  )
}

export default Form;