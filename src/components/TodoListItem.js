
import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';

export const TodoListItem = ({ todo, index, handleDelete, handleToggle }) => {
    return (
        <Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
            {
                (draggableProvide) => (
                    <li
                        {...draggableProvide.draggableProps}
                        ref={draggableProvide.innerRef}
                        {...draggableProvide.dragHandleProps}
                        className="list-group-item">
                        <p
                            onClick={() => handleToggle(todo.id)}
                            className={`${todo.done && 'complete'}`}
                        >
                            {index + 1}. {todo.desc}
                        </p>

                        <button
                            className='btn btn-danger'
                            onClick={() => handleDelete(todo.id)}
                        >
                            Borrar
                        </button>
                    </li>
                )
            }
        </Draggable>
    )
}

TodoListItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired
}
