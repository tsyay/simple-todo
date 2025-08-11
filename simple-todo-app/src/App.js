import { useState, useEffect } from "react";
import AddTodoForm from "./components/forms/AddTodoForm";
import TodoList from "./components/core/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => getTodosFromLocalStorage(), []);

  useEffect(() => setTodosToLocalStorage(), [todos]);

  const getTodosFromLocalStorage = () => {
    const saved = localStorage.getItem('todos');
    if (saved) {
      try {
        const parsedTodos = JSON.parse(saved);
        setTodos(parsedTodos);
      } catch (error) {
        console.error("Ошибка при парсинге todos из localStorage:", error);
      }
    }
  }

  const setTodosToLocalStorage = () => {
    if (todos.length === 0) return;
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  const addTodo = (todoItemText) => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: todoItemText,
        completed: false,
      }
    ]);
  };

  const toggleComplete = (id) => { 
    setTodos(prevTodos => 
      prevTodos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <AddTodoForm addTodo={addTodo} />
      <TodoList 
        todos={todos} 
        toggleComplete={toggleComplete} 
        deleteTodo={deleteTodo} 
      />
    </div>
  );
}

export default App;