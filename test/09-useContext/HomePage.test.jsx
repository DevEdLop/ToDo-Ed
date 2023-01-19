import { render, screen } from "@testing-library/react"
import { HomePage } from "../../src/09-useContext/HomePage"
import { userContext } from '../../src/09-useContext/context/UserContext';

describe('Prueba en <HomePage/>', () => {
    const user = {
        id: 1,
        name:'Edwin'
    }

    test('debe de mostrar el componente sin el usuario', () => {
        render(
            <userContext.Provider value={{user: null}}>
                <HomePage />
            </userContext.Provider>
        )
        const preTag = screen.getByLabelText('pre')

        expect(preTag.innerHTML).toBe('null')
    })
    test('debe de mostrar el componente con el usuario', () => {

        render(
            <userContext.Provider value={{user: user}}>
                <HomePage />
            </userContext.Provider>
        )
        const preTag = screen.getByLabelText('pre')

        expect(preTag.innerHTML).toContain(user.name)
        expect(preTag.innerHTML).toContain(user.id.toString())
    })

})
