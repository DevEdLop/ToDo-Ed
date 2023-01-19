
import { act, renderHook } from '@testing-library/react'
import { useCounter } from '../../src/hooks/useCounter'

describe('Prueba en useCounter', () => {
  test('debe de retornar los valores por defecto', () => {

    const { result } = renderHook(() => useCounter())
    const { count, decrement, increment, reset } = result.current


    expect(count).toBe(10);
    expect(increment).toEqual(expect.any(Function));
    expect(decrement).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));

  })

  test('debe de generar el counter con el valor de 100', () => {
    const { result } = renderHook(() => useCounter(100))
    const { count } = result.current

    expect(count).toBe(100)

  })

  test('debe de incrementar el contador', () => {

    const { result } = renderHook(() => useCounter(100))
    const { increment } = result.current

    act(() => increment())


    expect(result.current.count).toBe(101)


  })
  test('debe de decrementar el contador', () => {

    const { result } = renderHook(() => useCounter(100))
    const { decrement } = result.current

    act(() => decrement())


    expect(result.current.count).toBe(99)


  })
  test('debe de reiniciar el contador', () => {

    const { result } = renderHook(() => useCounter(100))
    const { reset, increment } = result.current

    act(() => {
      increment(4)
      reset()
    })

    const { count } = result.current

    expect(count).toBe(100)


  })



})
