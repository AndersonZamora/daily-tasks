

import React, { useEffect, useReducer } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {
 
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {

        localStorage.setItem('todos', JSON.stringify(todos));

    }, [todos]);

    const handleDelete = (todoId) => {

        dispatch({
            type: 'delete',
            payload: todoId
        });
    };

    const handleToggle = (todoId) => {

        dispatch({
            type: 'toggle',
            payload: todoId
        });
    };

    const handleAddTodo = (newTodo) => {

        dispatch({
            type: 'add',
            payload: newTodo
        });
    }

    const onDrag = ({ source, destination }) => {
        if (!destination) {
            return;
        }

        if (source.index === destination.index
            && source.droppableId === destination.index) {
            return;
        }

        dispatch({
            type: 'move',
            payload: source.index,
            payloadD: destination.index
        });
    }


    return (
        <>
            <h1>Lista de tareas ({todos.length})</h1>
            <hr />

            <div className='mb-4'>
                <h4>Agregar tarea</h4>
                <hr />

                <TodoAdd
                    handleAddTodo={handleAddTodo}
                />

            </div>

            <DragDropContext onDragEnd={(result => { onDrag(result) })}>
                <div>
                    <TodoList
                        todos={todos}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />
                </div>

            </DragDropContext>
        </>
    )
}
