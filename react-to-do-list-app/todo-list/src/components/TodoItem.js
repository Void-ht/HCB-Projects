import React from 'react';
import { Button } from 'react-bootstrap';

const TodoItem = ({ todo, onDelete, onComplete, onEdit }) => {
    return (
        <li classname={`list-group-item d-flex justify-content-between align-items-center ${todo.completed ? 'bg-success text-white' : ''}`}>
            <span>{todo.text}</span>
            <div>
                <Button
                    variant="success"
                    onClick={() => onComplete(todo.id)}
                    className = "me-2"
                >
                    {todo.completed ? 'Undo' : 'Complete'}
                </Button>
                <Button
                    variant="warning"
                    onClick={() => onEdit(todo)}
                    className = "me-2"
                >
                    Edit
                </Button>
                <Button
                    variant="danger"
                    onClick={() => onDelete(todo.id)}
                >
                    Delete
                </Button>
            </div>
        </li>
    );
};

export default TodoItem;