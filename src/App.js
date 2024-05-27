import './App.css';
import Frase from './components/Frase';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  const nome = "Mário"

  return (

    <div className="App">
      <h1>Testando CSS</h1>
      <Frase />
      <Frase />
      <SayMyName nome = "João Pedro"/>
      <SayMyName nome = "Hellen"/>
      <SayMyName nome = {nome}/>
      <Pessoa 
        nome="João Pedro" idade="22" profissao="Estudante" foto="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App;
