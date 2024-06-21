import logo from './logo.svg';
import './App.scss';
import Sthg from './Example/my-component';
import TodoList from './Todos/ListTodo';
import Nav from './Navigation/Nav';
import Home from './Example/Home';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom';
import ListUser from './User/ListUser';
import UserDetail from './User/UserDetail';
// function component
function App() {

  return (
    <Router>
      <div className="App">

        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Routes>
            <Route path='/' element={<Home />}>
            </Route>

            <Route path='/todos' element={<TodoList />}>
            </Route>
            <Route path='/user' element={<ListUser />}>
            </Route>
            <Route path='/user/:id' element={<UserDetail />}>
            </Route>
          </Routes>
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
    </Router>
  );
}

export default App;
