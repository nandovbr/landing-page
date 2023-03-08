import './App.css';
import Asset from './components/assets/Asset';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <h1>Grátis!</h1>
      <div className="container-app">
        <h2>E-Book com 10 Receitas Gourmet<br />que são Sucesso no iFood</h2>
      </div>
      <Home />
      <Asset />
    </div>
  );
}

export default App;
