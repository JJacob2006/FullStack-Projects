import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const API = "http://localhost:5001";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("all");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  // Load from localStorage OR backend
  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) {
      setTodos(JSON.parse(saved));
    } else {
      fetchTodos();
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const fetchTodos = async () => {
    const res = await axios.get(`${API}/todos`);
    setTodos(res.data);
  };

  const addTodo = async () => {
    if (!text) return;
    await axios.post(`${API}/todos`, { text });
    setText("");
    fetchTodos();
  };

  const toggleTodo = async (id, completed) => {
    await axios.put(`${API}/todos/${id}`, { completed: !completed });
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`${API}/todos/${id}`);
    fetchTodos();
  };

  // Edit feature
  const startEdit = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const saveEdit = (id) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, text: editText } : t))
    );
    setEditingId(null);
  };

  // Filter logic
  const filteredTodos = todos.filter((t) => {
    if (filter === "completed") return t.completed;
    if (filter === "pending") return !t.completed;
    return true;
  });

  // Stats
  const total = todos.length;
  const completed = todos.filter((t) => t.completed).length;
  const percent = total ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="app">
      <h1>Smart Todo Manager</h1>

      <div className="notice">
  ⚠️ Note: This is a frontend deployment. Backend APIs run locally.  
  Screenshots below demonstrate full CRUD functionality.
</div>

      {/* Stats */}
      <div className="stats">
        <p>Total: {total}</p>
        <p>Completed: {completed}</p>
        <p>Progress: {percent}%</p>
      </div>

      {/* Input */}
      <div className="input-box">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter task..."
        />
        <button onClick={addTodo}>Add</button>
      </div>

      {/* Filters */}
      <div className="filters">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={() => setFilter("pending")}>Pending</button>
      </div>

      {/* Todo List */}
      <ul>
        {filteredTodos.map((t) => (
          <li key={t.id} className={t.completed ? "done" : ""}>
            {editingId === t.id ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => saveEdit(t.id)}>Save</button>
              </>
            ) : (
              <>
                <span onClick={() => toggleTodo(t.id, t.completed)}>
                  {t.text}
                </span>
                <div>
                  <button onClick={() => startEdit(t)}>Edit</button>
                  <button onClick={() => deleteTodo(t.id)}>✖</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>

      {/* Screenshots Section */}
      <h2 style={{ marginTop: "30px" }}>Working Demo (Screenshots)</h2>

      <p style={{ fontSize: "14px", color: "#94a3b8" }}>
        Backend runs locally. Below screenshots demonstrate full CRUD functionality.
      </p>

      <div className="gallery">
        <img src="/images/1.png" alt="step1" />
        <img src="/images/2.png" alt="step2" />
        <img src="/images/3.png" alt="step3" />
        <img src="/images/4.png" alt="step4" />
      </div>
    </div>
  );
}

export default App;