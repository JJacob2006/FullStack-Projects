const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let todos = [];

app.post("/todos", (req, res) => {
  const todo = {
    id: Date.now(),
    text: req.body.text,
    completed: false
  };
  todos.push(todo);
  res.json(todo);
});

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.put("/todos/:id", (req, res) => {
  todos = todos.map(t =>
    t.id == req.params.id ? { ...t, completed: req.body.completed } : t
  );
  res.json({ message: "updated" });
});

app.delete("/todos/:id", (req, res) => {
  todos = todos.filter(t => t.id != req.params.id);
  res.json({ message: "deleted" });
});

app.listen(5001, () => console.log("Server running on port 5001"));