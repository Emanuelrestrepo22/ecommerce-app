import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Navbar} from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemCount } from './components/ItemCount/ItemCount';

function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer saludo="Bienvenidos"/>
    </>
  );
}

export default App;
