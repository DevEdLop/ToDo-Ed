import { useEffect, useState } from "react"
import { Message } from "./Message"

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Eugene',
        email: 'eugene@gmail.com'
    })

    const { username, email } = formState


    //llaves cuadradas para referenciar a la prop computada del objeto
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        // console.log(value)
        // console.log(name)
        setFormState({
            ...formState,
            [name]: value
        })
    }

    //efecto secundario 
    // useEffect(() => {
    //     console.log('USEeff')
    // }, [])
    // useEffect(() => {
    //     console.log('el form State Cambio')
    // }, [formState])
    // useEffect(() => {
    //     console.log('email Change')
    // }, [email])

    return (
        <>

            <h1>Formulario Simple</h1>

            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="edwin@example.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />
            {
                username === 'Eugene' && <Message />
            }

        </>
    )
}

export default SimpleForm