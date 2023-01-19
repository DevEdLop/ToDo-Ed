import { useState } from "react"
import { userContext } from "./UserContext"


// const user = {
//     id: 'edwin00',
//     username: 'benito'
// }

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState();

    return (
        <userContext.Provider value={{ user, setUser }}>
            {children}
        </userContext.Provider>
    )
}
