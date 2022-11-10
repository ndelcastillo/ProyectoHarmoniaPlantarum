import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ItemListContainer from './components/Products/ItemListContainer';
import Products from './components/Products/ItemListContainer';

function App() {

  return (
    <div className="App">
      <Header />
      <ItemListContainer greeting="Productos" />
      <Footer />
    </div>
  );
}

export default App;
