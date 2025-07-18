import './App.css';
import Navbar from './component/navbar/Navbar';
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup'
import Footer from './component/footer/Footer';
import PlaceOrder from './component/placeOrder/PlaceOrder';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<ShopCategory category="men"/>}/>
        <Route path='/women' element={<ShopCategory category="women"/>}/>
        <Route path='/bags' element={<ShopCategory category="bags"/>}/>
        <Route path='/product' element={<Product/>}>
              <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
