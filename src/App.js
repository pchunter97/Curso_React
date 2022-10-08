import logo from './logo.svg';
import './App.css';
import ListaContacto from './components/containers/lista_contacto';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ListaContacto></ListaContacto>
      </header>
    </div>
  );
}

export default App;
