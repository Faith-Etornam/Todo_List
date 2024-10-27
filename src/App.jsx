import { useState } from 'react';
import './App.css';

function App() {

  const [list, setList] = useState([]);
  const [newTodo, setNewTodo] = useState(""); 
  const [searchTerm, setSearchTerm] = useState("");
  const [theme, setTheme] = useState("light");

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, { text: newTodo, completed: false }]);
    setNewTodo(""); 
  };

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleToggle = (index) => {
    setList(
      list.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (index) => {
    setList(list.filter((todo, i) => i !== index));
  };

  const filteredList = list.filter((todo) =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`${theme} container`}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className='todo'
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add your new List"
        />

        <button type="submit">Add Task</button>
      </form>
      <input
        type="text"
        className="todo"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search"
      />

<button onClick={handleThemeToggle}>
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>


      <ul>
        {filteredList.map((todo, index) => (
          <li key={index}>
            <button
  className={`btn1 ${todo.completed ? 'checked' : ''}`}
  onClick={() => handleToggle(index)}
>
  {todo.completed ? 'Completed' : 'Uncompleted'}
</button>


<span style={{ textDecoration: todo.completed ? "line-through" : "" }}>
              {todo.text}
            </span>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
