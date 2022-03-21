
import React from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({ todos, handleDelete, handleToggle }) => {

    return (
        <Droppable droppableId="todos">
            {(droppableProvided) => (
                <ul
                    {...droppableProvided.droppableProps}
                    ref={droppableProvided.innerRef}
                    className="list-group list-group-flush">
                    {
                        todos.map((todo, index) => (
                            <TodoListItem
                                todo={todo}
                                index={index}
                                key={todo.id}
                                handleDelete={handleDelete}
                                handleToggle={handleToggle}
                            />
                        ))
                    }
                    {droppableProvided.placeholder}
                </ul>
            )}

        </Droppable>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired
}