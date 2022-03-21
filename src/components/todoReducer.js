

export const todoReducer = (state = {}, action) => {

    switch (action.type) {
        case 'add':
            return [...state, action.payload];

        case 'delete':
            return state.filter(todo => todo.id !== action.payload);

        case 'toggle':
            return state.map(todo =>
                (todo.id === action.payload)
                    ? { ...todo, done: !todo.done }
                    : todo
            );
        case 'move':
            const reorde = () => {
                const result = [...state];
                const [remove] = result.splice(action.payload, 1);
                result.splice(action.payloadD, 0, remove);

                return result;
            }
            return reorde();

        default:
            return state;
    }
}