function Bird({ bird }) {
  const {id, birdName, date, place} = bird;
  
  return (
    <article data-bird-id={id}>
      <h3>{birdName}</h3>
      <p>Date: {date}</p>
      <p>Place: {place}</p>
    </article>
  )
}

export default Bird;