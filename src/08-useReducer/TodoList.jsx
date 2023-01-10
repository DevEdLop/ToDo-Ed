import { TodoItem } from './TodoItem'

export const TodoList = ({ todos = [], onDeleteToDo, onToggleTodo }) => {




    return (
        <ul className="list-group">
            {
                todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        {...todo}
                        onDeleteToDo={onDeleteToDo}
                        onToggleTodo={onToggleTodo}
                    />
                ))
            }
        </ul>
    )
}
