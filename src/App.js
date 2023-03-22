
import './App.css';
import Navbar from './componenter/navbar/Navbar';
import Counter from './componenter/Contador/Counter';
import CartWidget from './componenter/CartWidget/CartWidget';
import ItemListContainer from './componenter/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      {<Navbar></Navbar>}
      <ItemListContainer greeting={"Bienvenidos a la tienda"}/>
    </div>
    
    
  );
}
export default App;
