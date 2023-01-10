export const todoReducerEd = (initialState = [], action) => {

    switch (action.type) {
        case 'ABC':
            throw new Error('Action.type = ABC is not supported')
        case 'ADD_TODO':
            return [action.payload, ...initialState]
        case 'REMOVE_TODO':
            return initialState.filter(todo => todo.id !== action.payload)
        case 'TOGGLE_TODO':
            return initialState.map(todo => {

                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            })
        default:
            return initialState;
    }


}