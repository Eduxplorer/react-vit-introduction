import Header from './components/Header/index.js';
import Pesquisa from './components/Pesquisa/index.js';
import styled from 'styled-components';
import UltimosLancamentos from './components/UltimosLancamentos/index.js';




const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589);



`


function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default App;
