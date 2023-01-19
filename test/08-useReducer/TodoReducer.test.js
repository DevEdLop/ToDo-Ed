import { todoReducerEd } from "../../src/08-useReducer"

describe('Pruebas en todoReducerEd', () => {

    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false,
    }];


    test('debe de regresar el estado inicial', () => {

        const newState = todoReducerEd(initialState, {});
        expect(newState).toBe(initialState);

    });


    test('debe agregar un todo', () => {
        const action = {
            type: 'ADD_TODO',
            payload: {
                id: 2,
                description: 'LA MAMAMAMAMAMA',
                done: false,
            }
        }


        const newState = todoReducerEd(initialState, action)
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload)


    })


    test('debe de eliminar un TODO', () => {

        const id = 1

        const action = {
            type: 'REMOVE_TODO',
            payload: id
        }


        const newState = todoReducerEd(initialState, action)
        expect(newState.length).toBe(0);
    })

    test('debe de realizar el toggle del todo', () => {
        const id = 1

        const action = {
            type: 'TOGGLE_TODO',
            payload: id
        }


        const newState = todoReducerEd(initialState, action)
        
        expect(newState[0].done).toBeTruthy();
    })


});
