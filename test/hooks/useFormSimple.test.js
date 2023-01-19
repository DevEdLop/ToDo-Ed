import { renderHook } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import { useFormSimple } from "../../src/hooks/useFormSimple"

describe('Prueba en useFormSimple', () => {

    const initialForm = {
        name: 'Edwin',
        lastName: 'Edwin@mail.com',
        gender: 'man',
        age: '23'
    }
    test('debe regresar los valores por defecto', () => {
        const { result } = renderHook(() => useFormSimple(initialForm))

        expect(result.current).toEqual({
            name: 'Edwin',
            lastName: 'Edwin@mail.com',
            gender: 'man',
            age: '23',
            formState: {
                name: 'Edwin',
                lastName: 'Edwin@mail.com',
                gender: 'man',
                age: '23'
            },
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function),
        })
    })

    test('debe de cambiar el nombre del formulario', () => {

        const newValue = 'Asly'
        const { result } = renderHook(() => useFormSimple(initialForm))
        const { onInputChange } = result.current

        act(() => onInputChange({ target: { name: 'name', value: newValue } }))

        expect(result.current.name).toBe(newValue)
        expect(result.current.formState.name).toBe(newValue)
    })
    test('debe de reinciar el nombre del formulario', () => {
        const newValue = 'Asly'

        const { result } = renderHook(() => useFormSimple(initialForm))
        const { onInputChange, onResetForm } = result.current

        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } })
            onResetForm()
        })

        expect(result.current.name).toBe(initialForm.name)
        expect(result.current.formState.name).toBe(initialForm.name)
    })

})
