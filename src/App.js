import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Life List</h1>

      <form>
        <input name="name" title="bird name" type="text" placeholder="Bird name..." />
        <input name="date" title="date spotted" type="text" placeholder="Date spotted..." />
        <input name="place" title="place spotted" type="text" placeholder="Place spotted..." />
      </form>

      <section>
        <article>
          <h3>Wren</h3>
          <p>Date: 05-22-2023</p>
          <p>Place: Under the sea.</p>
        </article>
      </section>
    </div>
  );
}

export default App;
