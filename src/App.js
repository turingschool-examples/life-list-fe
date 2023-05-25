import './App.css';
import Form from './Form';
import BirdsContainer from './BirdsContainer';

function App() {
  return (
    <div className="App">
      <h1>Life List</h1>
      <p>Record the birds you've seen.</p>

      <Form />

      <BirdsContainer />
    </div>
  );
}

export default App;
