function getBirds() {
  return fetch('http://localhost:3001/api/v1/birds')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        throw new Error('Something happened with getting all of the birds.');
      }
    })
    .then(response => response.json());
}

function postBird(newBird) {
  return fetch('http://localhost:3001/api/v1/birds', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBird)
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        throw new Error('Something happened while adding a new bird via POST.')
      }
    })
    .then(response => response.json());
}

export { getBirds, postBird };