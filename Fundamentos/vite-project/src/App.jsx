import './App.css'
import PrimeiroComponente from './componentes/PrimeiroComponente';
import TemplateExpressions from './componentes/TemplateExpressions';

// 6 Importando hierarquia de Componentes

import HierarquiaComponentes from './componentes/HierarquiaComponentes';

// 7 - Importando evento de clique

import EventoClick from './componentes/EventoClick';

// 2 - Exibindo componente importado na tela

function App() {
  return (
    <div className="AppFundamentos">
      <h1>Olá terra!</h1>
      <PrimeiroComponente />
      <TemplateExpressions />
      <HierarquiaComponentes />
      <EventoClick />
    </div>
  )
};

export default App;
