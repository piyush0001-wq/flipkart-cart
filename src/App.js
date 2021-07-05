import './App.css';
import Header from './components/header/Header';
import Products from './components/products/Products';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Cart from './components/cart/Cart';

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <Header />
        <Switch>

          <Route path='/' component={Products} exact />
          <Route path='/cart' component={Cart} exact />
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
