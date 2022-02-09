import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

function Header() {
  return ( 
  <header>
    <h1>Tasks Board</h1>
      <button className='primary-button'>
        Show Backlog
      </button>
    </header>
  );
}

export default App;
