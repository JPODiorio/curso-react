import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {

  const name = 'João Pedro'
  
  const newName = name.toUpperCase();

  const url = 'https://via.placeholder.com/150'

  function soma(a, b){
    return a+b
  }

  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Olá, {newName}</p>
      <p>Soma: {soma(3, 8)}</p>
      <img src={url} alt = "imagem"/>
      <HelloWorld />
    </div>
  );
}

export default App;
