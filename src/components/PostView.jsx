import { useLayoutEffect, useRef, useState } from "react"


export const PostView = ({ id, title, body, userId }) => {


    const pRef = useRef()

    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })
    useLayoutEffect(() => {
        const { height, width } = pRef.current.getBoundingClientRect()
        setBoxSize({ width, height })
        // console.log(pRef.current.getBoundingClientRect())
    }, [body])



    return (
        <>
            <h5>
                #post: {id}
            </h5>
            <blockquote className="blockquote text-center"
                style={{ display: 'flex' }}
            >
                <p ref={pRef} className="mb-4">{body}</p>
                <footer className="blockquote-footer">{title} User: <b>{userId}</b></footer>
            </blockquote>

            <code>{JSON.stringify(boxSize)}</code>
        </>
    )
}

