import { fireEvent, render, screen } from "@testing-library/react"
import { TodoItem } from "../../src/08-useReducer/TodoItem"

describe('Prueba a <TodoItem/>', () => {

    const todo = {
        id: 1,
        description: 'Piedra del alma',
        done: false
    }

    const onToggleTodoMock = jest.fn()
    const onDeleteToDoMock = jest.fn()


    beforeEach(() => {
        jest.clearAllMocks()
    })
    test('debe de mostrar el todo pendiente de completar', () => {

        render(<TodoItem
            {...todo}
            onDeleteToDo={onDeleteToDoMock}
            onToggleTodo={onToggleTodoMock}
        />)

        const litElement = screen.getByRole('listitem')

        expect(litElement.className).toBe('list-group-item d-flex justify-content-between')

        const spanElement = screen.getByLabelText('span')

        expect(spanElement.className).toContain('align-self-center')

    })
    test('debe de mostrar el todo completado', () => {

        todo.done = true;


        render(<TodoItem
            {...todo}
            onDeleteToDo={onDeleteToDoMock}
            onToggleTodo={onToggleTodoMock}
        />)

        const litElement = screen.getByRole('listitem')

        expect(litElement.className).toBe('list-group-item d-flex justify-content-between')

        const spanElement = screen.getByLabelText('span')

        expect(spanElement.className).toContain('align-self-center')
        expect(spanElement.className).toContain('text-decoration-line-through')

    })

    test('el span debe de llamar el toggleTodo cuando se hace click', () => {

        render(<TodoItem
            {...todo}
            onDeleteToDo={onDeleteToDoMock}
            onToggleTodo={onToggleTodoMock}
        />)

        const spanElement = screen.getByLabelText('span')
        fireEvent.click(spanElement)
        
        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id)
            
    })
    test('button debe de llamar el deleteTodo', () => {

        render(<TodoItem
            {...todo}
            onDeleteToDo={onDeleteToDoMock}
            onToggleTodo={onToggleTodoMock}
        />)

        const btnElement = screen.getByRole('button')
        fireEvent.click(btnElement)
        
        expect(onDeleteToDoMock).toHaveBeenCalledWith(todo.id)
            
    })


})
