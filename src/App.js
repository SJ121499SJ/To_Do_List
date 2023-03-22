import './App.css';
import Todo from './Todo.js'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <BrowserRouter>
        <Routes>
          <Route path='/Todo' element={<Todo/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
