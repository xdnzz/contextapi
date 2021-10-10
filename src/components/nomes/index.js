import { useContext } from 'react';

import {UserContext} from '../../contexts/user'


function Nomes(){

const {students, setStudents} = useContext(UserContext)


function changeName(){

    setStudents(students + 1)

}
    return(
        <div>
            <button onClick={()=>changeName()}>Mudar Nome </button>
          <span style={{color: "red"}}>Bem-vindo: {students} </span>
            
            
        </div>
    )
}

export default Nomes;