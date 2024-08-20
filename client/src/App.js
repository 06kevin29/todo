import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { shadows } from '@mui/system';
import ToDoList from './Components/ToDoList';
import axios from 'axios'
axios.defaults.withCredentials = true;
const api = axios.create({
    baseURL: 'http://localhost:8000/api',
})

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    api
      .get("/todos/")
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the todos!", error);
      });
  }, []);

  const handleAddTodo = () => {
    const todo = {
        text: newTodo,
        completed: false,
    };

    api.post('/todos/', todo)
        .then((response) => {
            setTodos([...todos, response.data]);
            setNewTodo('');
        })
        .catch((error) => {
            console.error("There was an error adding the todo!", error);
        });
  };

  const handleToggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    const updatedTodo = { ...todo, completed: !todo.completed };

    api.put(`/todos/${id}/`, updatedTodo)
        .then((response) => {
            const updatedTodos = todos.map((todo) =>
                todo.id === id ? response.data : todo
            );
            setTodos(updatedTodos);
        })
        .catch((error) => {
            console.error("There was an error updating the todo!", error);
        });
  };
  
  const handleDeleteTodo = (id) => {
    api.delete(`/todos/${id}/`)
        .then(() => {
            setTodos(todos.filter((todo) => todo.id !== id));
        })
        .catch((error) => {
            console.error("There was an error deleting the todo!", error);
        });
  };

  const handleClearCompleted = () => {
    const completedTodos = todos.filter(todo => todo.completed);

    Promise.all(completedTodos.map(todo =>
        api.delete(`/todos/${todo.id}/`)
    ))
    .then(() => {
        setTodos(todos.filter(todo => !todo.completed));
    })
    .catch((error) => {
        console.error('There was an error clearing the completed todos!', error);
    });
};

  return (
    <Container maxWidth="sm">
      <Box sx={{ paddingTop: '10%', paddingBottom: '5%' }}>
        <Typography variant="h3" color={"#fff"} gutterBottom>
          To Do List
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "#fff",
          borderRadius: "10px",
          padding: "0% 5%",
          marginBottom: "10px",
          boxShadow: 7 
        }}
      >
        <TextField
          label="New ToDo"
          variant="standard"
          color='secondary'
          fullWidth
          value={newTodo}
          style={{ marginTop: "10px" }}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <Button
          variant="contained"
          color="secondary"
          onClick={handleAddTodo}
          style={{ marginTop: "16px", marginBottom: "16px" }}
          fullWidth
          disabled={!newTodo.trim()} 
        >
          Add Item
        </Button>
      </Box>
      <ToDoList
        todos={todos}
        onToggle={handleToggleTodo}
        onDelete={handleDeleteTodo}
        onClearCompleted={handleClearCompleted}
      />
    </Container>
  );
}

export default App;
