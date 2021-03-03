import './App.css';

import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Error from './pages/Error';

import { Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  return <>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/products' component={Products} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/cart' component={Cart} />
      <Route component={Error} />
    </Switch>
  </>; 
}

export default App;
