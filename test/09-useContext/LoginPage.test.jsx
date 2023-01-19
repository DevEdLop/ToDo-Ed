const { render, screen, fireEvent } = require("@testing-library/react")
const { LoginPage } = require("../../src/09-useContext/LoginPage")
import { userContext } from '../../src/09-useContext/context/UserContext';

describe('Prueba en <LoginPage/>', () => {

    test('debe de mostrar el componente sin el usuario', () => {
        render(
            <userContext.Provider value={{user: null }}>
                <LoginPage />
            </userContext.Provider>
        )

        const preTag = screen.getByLabelText('pre')
        expect(preTag.innerHTML).toBe('null')


    })



    test('debe de llamar al setUser Cuando se hace click', () => {

        const setUserMock = jest.fn()
        render(
            <userContext.Provider value={{user: null , setUser: setUserMock }}>
                <LoginPage />
            </userContext.Provider>
        )

        const btn = screen.getByRole('button')
        fireEvent.click(btn)
        

        expect(setUserMock).toHaveBeenCalledWith({"email": "Edwid01f@gmail.com", "id": 123, "name": "John"})



    })

})
