import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Inicio from './components/paginas/Inicio';
import Pokedex from './components/paginas/Pokedex'
import Cartas from './components/paginas/Cartas'
import Carrito from './components/paginas/Carrito'
import Item from './components/Item/Item'




function App() {
  return (
    <>
        <div>
      <Routes>        
        <Route path="/"  element={<Inicio/>} />
        <Route path="/Pokedex"  element={<Pokedex />}/>
        <Route path="/Cartas"  element={<Cartas/>}/>
        <Route path="/cart"  element={<Carrito/>}/>
      </Routes>
      </div>
      </>
  );
}

export default App;
