import { render, screen } from "@testing-library/react"
import { TodoApp } from "../../src/08-useReducer"
import { useTodo } from "../../src/hooks/useTodo"


jest.mock("../../src/hooks/useTodo")
describe('Pruebas en <TodoApp/>', () => {

    useTodo.mockReturnValue({
        todos: [
            {
                id: 1,
                description: "Todo #1",
                done: false
            }, {
                id: 2,
                description: "Todo #2",
                done: false
            }],
        handleDeleteToDo: jest.fn(),
        handleNewTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
        todoCount: 2,
        pendingToDo: 1
    })
    test('debe de mostrar el componente correctamente', () => {

        render(<TodoApp />)

        expect(screen.getByText("Todo #1")).toBeTruthy()
        expect(screen.getByText("Todo #2")).toBeTruthy()
        expect(screen.getByRole('textbox')).toBeTruthy()



        // screen.debug();
    })

})