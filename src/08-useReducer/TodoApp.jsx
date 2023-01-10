
import {
    TodoAdd,
    TodoList
} from '../08-useReducer'
import { useTodo } from '../hooks/useTodo'

export const TodoApp = () => {
    const {
        todos,
        handleDeleteToDo,
        handleNewTodo,
        handleToggleTodo,
        todoCount,
        pendingToDo } = useTodo()

    return (
        <>
            <h1>TodoApp ({todoCount()}) <small>pendientes: {pendingToDo()}</small> </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        onDeleteToDo={handleDeleteToDo}
                        onToggleTodo={handleToggleTodo}
                    />
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>

            </div>

        </>
    )
}
