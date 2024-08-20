import React from 'react';
import { Checkbox, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function ToDoItem({ todo, onToggle, onDelete }) {
    return (
        <ListItem
            secondaryAction={
                <IconButton edge="end" onClick={() => onDelete(todo.id)}>
                    <DeleteIcon />
                </IconButton>
            }
        >
            <Checkbox
                color="secondary"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
            />
            <ListItemText primary={todo.text} />
        </ListItem>
    );
}

export default ToDoItem;