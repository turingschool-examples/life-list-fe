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
// this is where POST happens
function postBird(newBird) { // http://localhost:3001/api/v1/birds
  
}

export { getBirds, postBird };