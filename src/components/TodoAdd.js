
import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {

    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) {
            return;
        }
        
        handleAddTodo({
            id: new Date().getTime(),
            desc: description,
            done: false
        });

        reset();
    };

    return (

        <form onSubmit={handleSubmit}>
            <input
                type="Text"
                className="form-control"
                name="description"
                value={description}
                onChange={handleInputChange}
                autoComplete="off" />

            <div className="d-grid gap-2 mt-2">

                <button
                    type="submit"
                    className="btn btn-outline-primary"
                >
                    Agregar
                </button>
            </div>
        </form>
    )
}

TodoAdd.propTypes = {
    handleAddTodo: PropTypes.func.isRequired
}