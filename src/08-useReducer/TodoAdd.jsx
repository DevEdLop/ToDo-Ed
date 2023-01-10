import { useFormSimple } from "../hooks/useFormSimple"

export const TodoAdd = ({ onNewTodo }) => {

    const { description, onInputChange, onResetForm } = useFormSimple({
        description: '',
    })

    const onFormSubmit = (e) => {
        e.preventDefault()
        if (description.length <= 4) return;

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description
        }
        onNewTodo(newTodo)
        onResetForm()
    }


    return (
        <form onSubmit={onFormSubmit}>
            <input
                className="form-control"
                type="text"
                placeholder="¿Que hay que hacer?"
                name="description"
                value={description}
                onChange={onInputChange}
            />
            <button type="submit"
                className="btn btn-outline-dark mt-2"
            >
                Agregar
            </button>
        </form>
    )
}
