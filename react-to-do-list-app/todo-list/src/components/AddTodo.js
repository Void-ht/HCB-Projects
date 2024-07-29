import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const AddTodo = ({ onAdd, editTodo, currentTodo }) => {
    const [text, setText] = useState(currentTodo ? currentTodo.text : '');
    const [dueDate, setDueDate] = useState(currentTodo ? currentTodo.dueDate : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text)
        {
            if(editTodo)
            {
                onAdd({ ...currentTodo, text, dueDate });
            }
            else
            {
                onAdd({ text, dueDate })
            }
            setText('');
            setDueDate('');
        }
    };

    return (
        <Form onSubmit = {handleSubmit}>
            <Form.Group>
                <Form.Control
                    type = "text"
                    placeholder = "Add a new task"
                    value = {text}
                    onChange = {(e) => setText(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type = "date"
                    value = {dueDate}
                    onChange = {(e) => setDueDate(e.target.value)}
                />
            </Form.Group>
            <Button variant="primary" type="submit">{editTodo ? 'Update Task' : 'Add Task'}</Button>
        </Form>
    );
};

export default AddTodo