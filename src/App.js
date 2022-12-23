import './App.css';
import './variables/fonts.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/Products/ItemListContainer';
import Error404 from './components/Error/Error404';
import Contacto from './components/Contacto/Contacto';
import UserContextProvider from './context/userContext';
import CarritoContextProvider from './context/carritoContext';
import CartView from './components/CartView/CartView';
import { exportDataToFirestore } from './services/firestore';
import { Button } from 'react-bootstrap';
import CheckoutForm from './components/CheckoutForm/CheckoutForm';
import Checkout from './components/Checkout/Checkout';


function App() {

//exportDataToFirestore()

  return (
    <div className="App">
      <CarritoContextProvider>
        <UserContextProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/categoria/todo" element={<ItemListContainer />} />
              <Route path="/categoria/:cat" element={<ItemListContainer />} />
              <Route path="/productos/:id" element={<ItemDetailContainer />} />
              <Route path="/checkout/:orderid" element={<Checkout/>} />
              <Route path="/checkoutform/:orderid" element={<CheckoutForm />} />
              <Route path="*" element={<Error404 />} />
              <Route path="/cart" element={<CartView />} />
              <Route path="/contacto" element={<Contacto />} />
            </Routes>
            {/*<Button onClick={exportDataToFirestore}>Click</Button>*/}
            <Footer />
          </BrowserRouter>
        </UserContextProvider>
      </CarritoContextProvider>
    </div>
  );
}

export default App;


