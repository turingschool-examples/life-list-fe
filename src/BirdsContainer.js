import Bird from './Bird';

function BirdsContainer({ birds }) {
  const birdCards = birds.map(bird => {
    return <Bird key={bird.id} bird={bird} />
  })
  
  return (
    <section className="birds-container">
      {birdCards}
    </section>
  )
}

export default BirdsContainer;