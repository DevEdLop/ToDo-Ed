import { memo } from "react"

export const ShowIncrement = memo(({ increment }) => {

    console.log('me volvi a generar :(')
    return (

        <button
            className="btn btn-outline-dark"
            onClick={() => {
                increment(4)
            }}
        >
            Incrementar
        </button>
    )
})
