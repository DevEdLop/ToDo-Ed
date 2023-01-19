import { useContext } from 'react'
import { userContext } from './context/UserContext';

export const LoginPage = () => {

    const {user, setUser} = useContext(userContext);


    return (
        <>
            <h1>LoginPage</h1>
            <hr />

            <pre
            aria-label='pre'>
                {JSON.stringify(user, null,3)}
            </pre>

            <button 
            className='btn btn-info'
            onClick={()=> setUser({id: 123, name: 'John', email: 'Edwid01f@gmail.com'})}
            >
                enviar usuario
            </button>
        </>
    )
}
