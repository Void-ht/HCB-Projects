import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onDelete, onComplete, onEdit }) => {
    return (
        <ul className="list-group">
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onDelete={onDelete}
                    onComplete={onComplete}
                    onEdit={onEdit}
                />
            ))}
        </ul>
    );
};

export default TodoList;