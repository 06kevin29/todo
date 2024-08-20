import React from 'react';
import { List, Box, Button } from '@mui/material';
import ToDoItem from './ToDoItem';

function ToDoList({ todos, onToggle, onDelete, onClearCompleted }) {
    return (
        <Box  sx={{ boxShadow: 7, backgroundColor: '#fff', borderRadius: '10px' }}>
            <List >
            {todos.map((todo) => (
                <ToDoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
            </List>
            <Button
                variant="text"
                color="secondary"
                onClick={onClearCompleted}
                sx={{ margin: '8px 16px' }}
                
            >
                Clear Completed
            </Button>
        </Box>
        
    );
}

export default ToDoList;