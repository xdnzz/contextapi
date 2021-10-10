import {useState, createContext} from 'react'

export const UserContext = createContext({})



function userProvider({ children }){
    return (
        <UserContext.Provider> 

            {children}
            
        </UserContext.Provider>
    )
}


export default userProvider;