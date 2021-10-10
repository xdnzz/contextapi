import {useState, createContext} from 'react'

export const UserContext = createContext({})



function UserProvider({ children }){

const [students, setStudents] = useState(['Danilo','Ismael','Rhaldney']);




    return (
        <UserContext.Provider value={{students, setStudents}}> 

            {children}
            
        </UserContext.Provider>
    )
}


export default UserProvider;