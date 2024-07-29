import React, { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() 
{
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState(null);

  const handleAdd = (todo) => {
    if (currentTodo)
    {
      setTodos(todos.map(t => t.id === todo.id ? todo : t));
      setCurrentTodo(null);
    }
    else
    {
      setTodos([...todos, {id: Date.now(), ...todo}]);
    }
  }

const handleDelete = (id) => {
  setTodos(todos.filter(todo => todo.id !== id));
};

const handleComplete = (id) => {
  setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
};

const handleEdit = (todo) => {
  setCurrentTodo(todo);
};

return (
  <Container>
    <Row className ="justify-content-md-center mt-5">
      <Col md={6}>
        <h1 className="text-center">To-Do List</h1>
        <AddTodo onAdd={handleAdd} editTodo={currentTodo} currentTodo={currentTodo}/>
        <TodoList todos={todos} onDelete={handleDelete} onComplete={handleComplete} onEdit={handleEdit}/>
      </Col>
    </Row>
  </Container>
  );
}

export default App;