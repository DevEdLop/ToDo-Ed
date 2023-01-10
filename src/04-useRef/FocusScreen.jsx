import { useRef } from "react"

const FocusScreen = () => {


    const inputRef = useRef()

    const onClickBtn = () => {
        // document.querySelector('input').select()
        inputRef.current.select()

    }





    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input
                className="form-control mt-2"
                placeholder="Ingrese su nombre"
                type="text" />
            <input
                ref={inputRef}
                className="form-control mt-2"
                placeholder="Ingrese su nombre"
                type="text" />
            <input
                className="form-control mt-2"
                placeholder="Ingrese su nombre"
                type="text" />
            <input
                className="form-control mt-2"
                placeholder="Ingrese su nombre"
                type="text" />

            <button
                className="btn btn-outline-danger mt-2"
                onClick={onClickBtn}
            >
                set Focus
            </button>
        </>
    )
}

export default FocusScreen
