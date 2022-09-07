import SegsAHoras from './components/segsAHoras'
import Nombres from './components/nombreHora'
import Llamadas from './components/pagoLlamada'
import Repetidos from './components/numerosRepetidos'
import Lista from './components/listaOrd'
import Impares from './components/impares'

import './App.css';
import './components.css'

function App() {

  return (
    <div className="App">
      <div className="" >
        <SegsAHoras />
      </div>
      <div>
        <Llamadas />
      </div>
      <div>
        <Nombres />
      </div>
      <div>
        <Repetidos />
      </div>
      <div>
        <Lista />
      </div>
    </div>
  )

}

export default App