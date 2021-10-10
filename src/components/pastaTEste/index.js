import { useContext } from 'react';

import {UserContext} from '../../contexts/user'


function Teste(){

    const {students, setStudents} = useContext(UserContext)
   
    return(
        <div>
            <h2>Página teste</h2>
            {students}
        </div>
    )
    

}


export default Teste;