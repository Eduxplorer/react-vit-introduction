
import './App.css'
//10 - Importando imagem do Assets
import ibirapuera from "./assets/ibirapuera.jfif"

// 11 - Importando hooks - useState

import Dados from './componentes/dados'

function App() {


  return (

    <div className="AppAvancado">
      <h1>Próximos passos ReactJS</h1>

      {/*9 - Inserindo imagem do public */}
      <img src="/SP.jfif" alt="Imagem de cima, São Paulo" title='São Paulo' />

      {/*Importando imagem do assets */}
      <img src={ibirapuera} alt="Foto do Parque Ibirapuera" title='Parque Ibirapuera' />

      {/*Importando Hooks*/}
      <Dados />
    </div>
  )
}

export default App
