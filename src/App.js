import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './home/HomePage';
import Header from './header/Header';
import OrderItem from './orderPages/OrderItem';
import Cart from './checkoutCart/Cart';
import SuccessOrder from './checkoutCart/SuccessOrder';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/order" exact>
        <OrderItem />
      </Route>
      <Route path="/order/cart" exact>
        <Cart />
      </Route>
      <Route path="/order/cart/success">
        <SuccessOrder />
      </Route>
    </BrowserRouter>
  );
}

export default App;
