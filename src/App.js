import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Portada from './components/portada/Portada';
import Navbar from './components/Navbar/Navbar';
import Inicio from './components/paginas/Inicio';


function App() {
  return (
      <Router>

        <Portada />
        <Navbar />
        <Inicio />
        <ItemListContainer texto='Esta es la pagina de Inicio! (ItemListContainer)' />
      </Router>
  );
}

export default App;
