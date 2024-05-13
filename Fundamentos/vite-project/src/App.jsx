import './App.css'
import PrimeiroComponente from './componentes/PrimeiroComponente';
import TemplateExpressions from './componentes/TemplateExpressions';

function clickButton () {
  const youtubeLink = "https://www.youtube.com/@kau.techOficial"
  const butao = document.querySelector("button")
  butao.addEventListener("click", () => {
    window.open(youtubeLink, "_blank")
  })
}

// 2 - Exibindo componente importado na tela

function App() {
  return (
    <div className="AppFundamentos">
    <h1>Olá terra!</h1>
    <PrimeiroComponente />
    <TemplateExpressions />
    <button onClick={clickButton()}>Inscreva-se</button>
  </div>
    )
}

export default App;
