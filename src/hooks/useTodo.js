import { useEffect, useReducer } from "react"
import { todoReducerEd } from "../08-useReducer";


const initialState = [
    /*     {
            id: new Date().getTime(),
            description: 'Recolectar la piedra del alma',
            done: false
        }, */
]

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}
export const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducerEd, initialState, init)


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


    const handleNewTodo = (todo) => {

        console.log({ todo: todo })
        dispatch({
            type: "ADD_TODO",
            payload: todo
        })
    }

    const handleDeleteToDo = (id) => {
        console.log({ id: id })
        dispatch({
            type: 'REMOVE_TODO',
            payload: id
        })
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: "TOGGLE_TODO",
            payload: id
        })
    }

    const todoCount = () => {
        return todos.length;
    }

    const pendingToDo = () => {
        return todos.filter(todo => !todo.done).length;
    }

    return {
        todos,
        handleNewTodo,
        handleDeleteToDo,
        handleToggleTodo,
        todoCount,
        pendingToDo
    }
}