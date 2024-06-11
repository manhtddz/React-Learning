import logo from './logo.svg';
import './App.css';
import Sthg from './Example/my-component';
import TodoList from './Todos/ListTodo';
// function component
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <Sthg /> */}
        <TodoList />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

          Learn React
        </a>
      </header>

    </div>
  );
}

export default App;
