
import Alunos from './components/alunos/index'

import UserProvider from './contexts/user';

import './style.css'

function App(){
  return (

    <UserProvider>
      <div>
        <h1>Faculdade Gitcesumar</h1>
        <hr/>

        <Alunos/>
     </div>

    </UserProvider>
 


  )
}


export default App;